import React, { Component } from 'react'
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Line } from 'react-chartjs-2';
import './Charts.css'

class Charts extends Component {

    state = {
        labels: [],
        datasets: [],
        deaths: []
    }

    componentDidUpdate (prevProps) {
        if(this.props.slug !== 'global' && prevProps.slug !== this.props.slug) {
            this.getConfirmedHistory();
        } else if(this.props.slug === 'global' && prevProps.slug !== this.props.slug) {
            this.setState({
                datasets: [],
                deaths: []
            })
        }
    }

    getConfirmedHistory () {
        Axios.get(`https://api.covid19api.com/dayone/country/${this.props.slug}/status/confirmed/live`)
        .then(response => {
            this.setLabels(response.data);
            this.setData(response.data);

            this.getDeathsHistory();
            console.log(response);
        }).catch(error => {
            console.log(error);
        });   
    }

    getDeathsHistory () {
        Axios.get(`https://api.covid19api.com/dayone/country/${this.props.slug}/status/deaths/live`)
            .then(response => {
                this.setData(response.data);
                console.log(response);
            }).catch(error => {
                console.log(error);
            });
    }

    setLabels = (data) => {
        var labels = data.map(day => {
            return day.Date.substring(5,10);
        });
        labels.pop();
        this.setState({
            labels
        });
    }

    setData = (data) => {

        if(data[0].Status === 'confirmed') {
            let cases = data.map(day => {
                return day.Cases;
            });
            cases.pop();
            let datasets = {
                label: 'Total Confirmed Cases',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: cases    
            }

            this.setState({
                datasets: [datasets]
            });

        } else {
            let cases = data.map(day => {
                return day.Cases;
            });
            cases.pop();
            let datasets = {
                label: 'Total Confirmed Deaths',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(255,10,10,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: cases    
            }

            this.setState({
                deaths: [datasets]
            });
        }
    }

    render () {  
        return(   
            <>
                <div className='row'>
                    <div className='col-lg-6 col-mg-12 chart-container'>
                        <Line
                            data={
                                {labels:this.state.labels,
                                    datasets:this.state.datasets}
                            }
                            height={150}
                            options={{}}
                        />
                    </div>
                    <div className='col-lg-6 col-mg-12 chart-container'>
                        <Line
                            data={
                                {labels:this.state.labels,
                                    datasets:this.state.deaths}
                            }
                            height={150}
                            options={{}}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default Charts
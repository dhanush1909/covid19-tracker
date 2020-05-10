import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css';
import CountUp from 'react-countup';

class Cards extends React.Component {

    render() {
        return (
            <>
                <div className='row card-holder'>
                    <div className='col-xl-3 col-lg-6 col-sm-6'>
                        <div className="card" >
                            <div className='color' style={{backgroundColor: '#eef5b2'}}></div>
                            <div className="card-body">
                                <h5 className="card-title">Total number of cases :</h5>
                                <h3>
                                    <CountUp
                                        end={this.props.data.TotalConfirmed}
                                        duration={3}
                                    />
                                </h3>
                                <h6 className="card-subtitle mb-2 text-muted">{this.props.country}</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-6 col-sm-6'>
                        <div className="card" >
                            <div className='color' style={{backgroundColor: '#37e5ef'}}></div>
                            <div className="card-body">
                                <h5 className="card-title">Total active cases :</h5>
                                <div className='row'>
                                    <h3 className="card-text col-md-7">
                                    <CountUp end={this.props.data.TotalConfirmed - this.props.data.TotalRecovered} /></h3>
                                    <h5 className="card-text col-md-5" style={{textAlign:'right', color:'#37e5ef'}}> +
                                        <CountUp end={this.props.data.NewConfirmed}
                                        />
                                    </h5>
                                </div>
                                <h6 className="card-subtitle mb-2 text-muted">{this.props.country}</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-6 col-sm-6' >
                        <div className="card" >
                            <div className='color' style={{backgroundColor: '#d1f513'}}></div>
                            <div className="card-body">
                                <h5 className="card-title">Recovered :</h5> 
                                <div className='row'>
                                    <h3 className="card-text col-md-7"><CountUp end={this.props.data.TotalRecovered} /></h3>
                                    <h5 className="card-text col-md-5" style={{textAlign:'right', color:'#d1ca13'}}>+
                                        <CountUp end={this.props.data.NewRecovered}
                                        />
                                    </h5>
                                </div>
                                <h6 className="card-subtitle mb-2 text-muted">{this.props.country}</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-6 col-sm-6'>
                        <div className="card" >
                            <div className='color' style={{backgroundColor: '#d63447'}}></div>
                            <div className="card-body">
                                <h5 className="card-title">Deaths :</h5>
                                <div className='row'>
                                    <h3 className="card-text col-md-7"><CountUp end={this.props.data.TotalDeaths} /></h3>
                                    <h5 className="card-text col-md-5" style={{textAlign:'right', color:'#d63447'}}>+
                                        <CountUp end={this.props.data.NewDeaths}
                                        />
                                    </h5>
                                </div>
                                <h6 className="card-subtitle mb-2 text-muted">{this.props.country}</h6>
                            </div>
                        </div>
                    </div>
                </div>
                
            </>
        )
    }
}

export default Cards
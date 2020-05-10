import React from 'react';
import './App.css';
import NavBar from './components/NanBar/NavBar';
import Cards from './components/Cards/Cards';
import axios from "axios";
import Charts from './components/Charts/Charts';
import Symptoms from './components/Symptoms/Symptoms';
import Prevention from './components/Prevention/Prevention';
import Footer from './components/Footer/Footer';
import Spinner from './components/Spinner/Spinner';


class App extends React.Component{

  state = {
    data : {},
    country: "Global",
    countries: [],
    slug: 'global',
    errors: false,
    loading: true
  }

  componentDidMount() {
    axios.get('https://api.covid19api.com/summary').then(response => {
      var countries = response.data.Countries.filter(country => country.TotalConfirmed > 0);
      var global = response.data.Global;
      global.Country = "Global";
      global.Slug = "global"
      countries.unshift(global);
      this.setState({
        data: response.data.Global,
        countries: countries,
        loading: false
      })
    }).catch(error => {
      this.setState({
        errors: true,
        loading: false
      })
    });
  }

  countryChanged = (data,slug) => {
    this.setState({
      country: data.Country,
      data,
      slug
    })
  }

  render () {
    return (
      <div className="App">
        {this.state.loading? <Spinner /> : null}
        {this.state.errors ? <h3 style={{textAlign:'center',color:'red'}}>Failed to load data. Please check your network and reload the page</h3> : null}
        {this.state.countries.length > 0 ? <NavBar countryChanged={this.countryChanged} countries={this.state.countries}/> : ''}
        {Object.keys(this.state.data).length > 0  ? <Cards data={this.state.data} country={this.state.country}/> : ''}
        {!this.state.errors && !this.state.loading ? <Charts slug={this.state.slug} /> : null}
        <Symptoms />
        <Prevention />
        <Footer />
      </div>
    );
  } 
}

export default App;

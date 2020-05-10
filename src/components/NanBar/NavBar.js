import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

class NavBar extends React.Component {

    state = {
        selectedCountry: ''
    }

    countryClicked = (country, slug) => {

        const countryData = this.props.countries.find(countryObject => {
            return countryObject.Country === country
        });
        this.setState({
            selectedCountry: country
        })
        this.props.countryChanged(countryData,slug);
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-light" style={{backgroundColor: '#e3f2fd'}}>
                    <h2>COVID 19</h2>
                    <label className="dropdown">
                        <div className="dd-button">
                            {this.state.selectedCountry === '' ? 'Select Country' : this.state.selectedCountry} 
                        </div>
                        <input type="checkbox" className="dd-input" id="test" />
                        <ul className="dd-menu">
                            {this.props.countries.map(country => {
                                const onClick = this.countryClicked.bind(this, country.Country, country.Slug)
                                return <li key={country.Slug} onClick={onClick}>{country.Country}</li>
                            })}
                        </ul>
                    </label>
                </nav>
            </>
        )
    }
}

export default NavBar
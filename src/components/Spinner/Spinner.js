import React, { Component } from 'react';
import './Spinner.css'

 class Spinner extends Component {

    render() {
        return(
            <div className='parent-container'>
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                <div><h4>Loading...</h4></div>
            </div>
            
        );
    }
 }

 export default Spinner
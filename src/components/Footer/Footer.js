import React, { Component } from 'react'
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends Component {

    render() {
        return (
            <footer className='footer'>
                <div className='wrap'>
                    <div className='row'>
                        <div className='col-xl-2 col-md-12 footer-content'>
                            <div className='text-heading'>Stay Safe</div>
                        </div>
                        <div className='col-xl-5 col-md-12 footer-content' style={{margin:'0 auto'}}>
                            <div className='text-heading'>Developer</div>
                            <p>Dhanush Kumar</p>
                            <p>dhanush1926@gmail.com</p>
                        </div>
                        <div className='col-xl-5 col-md-12 footer-content' style={{margin:'0 auto'}}>
                            <div className='text-heading'>API used</div>
                            <p>covid19api</p>
                            <p>https://api.covid19api.com/</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer

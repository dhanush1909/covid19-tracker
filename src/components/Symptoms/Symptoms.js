import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Symptoms.css';

class Symptoms extends Component {

    render() {
        return (
        <div className="signs">
            <div className='container-symptoms'>
                <h3>Signs And Symptoms</h3>
            </div>
            <section>
                <div className="grid-flex">
                    <div className="col col-image" style={{backgroundImage: 'url(https://ayurvedabenefits.org/ayurvedafiles/wp-content/uploads/2017/08/fever-home-remedies-845x321.png)'}}>
                    </div>
                    <div className="col col-text">
                        <div className="Aligner-item">
                            <h4><b>Fever -</b></h4>
                            <p>A low-grade fever that gradually increases in temperature</p>
                        </div>
                    </div>
                </div>
                <div className="grid-flex">
                    <div className="col col-image" style={{backgroundImage: 'url(https://cdn.dribbble.com/users/2392101/screenshots/5399243/orang_batuk.gif)'}}>
                    </div>
                    <div className="col col-text col-left">
                        <div className="Aligner-item">
                            <h4><b>Cough -</b></h4>
                            <p>Having a cough that gets more severe over time</p>
                        </div>
                    </div>
                </div>
                <div className="grid-flex">
                    <div className="col col-image" style={{backgroundImage: 'url(https://assets.rappler.com/612F469A6EA84F6BAE882D2B94A4B421/img/0534AB48A82F434EB8FC0D037C39148F/trouble-breathing-a-disease-that-can-kill-you--20150203.jpg)'}}>
                    </div>
                    <div className="col col-text">
                        <div className="Aligner-item">
                            <h4><b>Shortness of breath -</b></h4>
                            <p>Experiencing breathing difficulty describes discomfort when breathing and feeling as if you can’t draw a complete breath. This can develop gradually or come on suddenly.</p>
                        </div>
                    </div>
                </div>
                <div className="grid-flex">
                    <div className="col col-image" style={{backgroundImage: 'url(https://ankylosingspondylitis.net/wp-content/uploads/2019/06/coping-fatigue-873-combo.gif)'}}>
                    </div>
                    <div className="col col-text col-left">
                        <div className="Aligner-item">
                            <h4><b>Fatigue -</b></h4>
                            <p>An overall feeling of tiredness or lack of energy. It isn’t the same as simply feeling drowsy or sleepy. When you’re fatigued, you have no motivation and no energy. Being sleepy may be a symptom of fatigue</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
    }
}

export default Symptoms
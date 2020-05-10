import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


class Prevention extends Component {

    render() {
        return (
            <div className="signs">
                <div className='container-symptoms'>
                    <h3>Prevention Measures</h3>
                </div>
                <section>
                <div className="grid-flex">
                    <div className="col col-image" style={{backgroundImage: 'url(https://ak.picdn.net/shutterstock/videos/12386246/thumb/1.jpg)'}}>
                    </div>
                    <div className="col col-text">
                        <div className="Aligner-item">
                            <h4><b>Stay Home -</b></h4>
                            <p>STAY HOME.SAVE LIVES.</p>
                        </div>
                    </div>
                </div>
                <div className="grid-flex">
                    <div className="col col-image" style={{backgroundImage: 'url(https://cdn.dribbble.com/users/1815739/screenshots/11237195/media/c08d967ae20a8396ca469081dcc88cd4.gif)'}}>
                    </div>
                    <div className="col col-text col-left">
                        <div className="Aligner-item">
                            <h4><b>Social distancing -</b></h4>
                            <p>Keep distance of 1 meter</p>
                        </div>
                    </div>
                </div>
                <div className="grid-flex">
                    <div className="col col-image" style={{backgroundImage: 'url(https://media.istockphoto.com/vectors/people-wearing-medical-mask-against-about-corona-virus-illustrated-vector-id1212828161?k=6&m=1212828161&s=170667a&w=0&h=GmRnDg6iumlmbLGJsIuG0BYnkD5NocTkOz5sC2eCHJI=)'}}>
                    </div>
                    <div className="col col-text">
                        <div className="Aligner-item">
                            <h4><b>Wear a Mask -</b></h4>
                            <p>Wear a mask, stop the spread of the deadly virus.</p>
                        </div>
                    </div>
                </div>
                <div className="grid-flex">
                    <div className="col col-image" style={{backgroundImage: 'url(https://media.istockphoto.com/vectors/girl-sick-lying-in-bed-ill-cold-flu-disease-illness-virus-cartoon-vector-id1180957500?k=6&m=1180957500&s=170667a&w=0&h=YA4aV-vn59ifYi8hEGImxDjKN5P1fCBL1SzqyuehR7w=)'}}>
                    </div>
                    <div className="col col-text col-left">
                        <div className="Aligner-item">
                            <h4><b>SICK? Get tested -</b></h4>
                            <p>Are you showing above symptoms? Visit a doctor, get tested.</p>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        );
    }
}

export default Prevention
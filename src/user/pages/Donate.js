import { Fragment } from 'react';

function Donate(props) {
    return (
        <Fragment>
            <div className="page-nav no-margin row">
                <div className="container">
                    <div className="row">
                        <h2>Popular Causes</h2>
                        <ul>
                            <li> <a href="/"><i className="fas fa-home"></i> Home</a></li>
                            <li><i className="fas fa-angle-double-right"></i> About Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        
            <section className="events">
                <div className="container">
                
                    <div className="event-ro row">
                        <div className="col-md-4 col-sm-6">
                            <div className="event-box">
                                <img src="assets/images/events/image_08.jpg" alt=""/>
                                <h4>Child Education in Africa</h4>
                                
                                <p className="raises"><span>Raised : $34,425</span> / $500,000 </p>
                                <p className="desic">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's </p>
                                <button className="btn btn-success btn-sm">Donate Now</button>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="event-box">
                                <img src="assets/images/events/image_06.jpg" alt=""/>
                                <h4>Child Education in Africa</h4>
                                <p className="raises"><span>Raised : $34,425</span> / $500,000 </p>
                                <p className="desic">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's </p>
                                <button className="btn btn-success btn-sm">Donate Now</button>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="event-box">
                                <img src="assets/images/events/image_04.jpg" alt=""/>
                                <h4>Child Education in Africa</h4>
                                <p className="raises"><span>Raised : $34,425</span> / $500,000 </p>
                                <p className="desic">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's </p>
                                <button className="btn btn-success btn-sm">Donate Now</button>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="event-box">
                                <img src="assets/images/events/image_05.jpg" alt=""/>
                                <h4>Child Education in Africa</h4>
                                <p className="raises"><span>Raised : $34,425</span> / $500,000 </p>
                                <p className="desic">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's </p>
                                <button className="btn btn-success btn-sm">Donate Now</button>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="event-box">
                                <img src="assets/images/events/image_06.jpg" alt=""/>
                                <h4>Child Education in Africa</h4>
                                <p className="raises"><span>Raised : $34,425</span> / $500,000 </p>
                                <p className="desic">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's </p>
                                <button className="btn btn-success btn-sm">Donate Now</button>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="event-box">
                                <img src="assets/images/events/image_07.jpg" alt=""/>
                                <h4>Child Education in Africa</h4>
                                <p className="raises"><span>Raised : $34,425</span> / $500,000 </p>
                                <p className="desic">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's </p>
                                <button className="btn btn-success btn-sm">Donate Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </Fragment>
    );
}

export default Donate;
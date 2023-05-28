import React from 'react';
import { Link } from 'react-router-dom';

import "./Layouts.css"
import { PathUser } from '../../routers/PathUser';


function Header(props) {
    return (
        <header className="continer-fluid ">
          <div className="header-top">
              <div className="container">
                  <div className="row col-det">
                      <div className="col-lg-6 d-none d-lg-block">
                          <ul className="ulleft">
                              <li>
                                  <i className="far fa-envelope"></i>
                                  sales@smarteyeapps.com
                                  <span>|</span></li>
                              <li>
                                  <i className="fas fa-phone-volume"></i>
                                  +876 987 666 5433</li>
                          </ul>
                      </div>
                      <div className="col-lg-3 col-md-6 folouws">
                        
                          <ul className="ulright">
                            <li> <small>Folow Us </small>:</li>
                              <li>
                                  <i className="fab fa-facebook-square"></i>
                              </li>
                              <li>
                                  <i className="fab fa-twitter-square"></i>
                              </li>
                              <li>
                                  <i className="fab fa-instagram"></i>
                              </li>
                              <li>
                                  <i className="fab fa-linkedin"></i>
                              </li>
                          </ul>
                      </div>
                      <div className="col-lg-3 d-none d-md-block col-md-6 btn-bhed">
                          <button className="btn btn-sm btn-success">Login</button>
                          <button className="btn btn-sm btn-default">Register</button>
                      </div>
                  </div>
              </div>
          </div>
          <div id="menu-jk" className="header-bottom">
              <div className="container">
                  <div className="row nav-row">
                      <div className="col-lg-3 col-md-12 logo">
                          <a href="index.html">
                              <img src="assets/images/logo.jpg" alt=""/>
                          </a>
                              <a data-toggle="collapse" data-target="#menu" href="#menu"><i className="fas d-block d-lg-none  small-menu fa-bars"></i></a>
                      </div>
                      <div id="menu" className="col-lg-9 col-md-12 d-none d-lg-block nav-col">
                            <ul className="navbad">
                                <li className="nav-item active">
                                    <Link className="nav-link" to={PathUser.user}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={PathUser.userAboutUs}>About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={PathUser.userOutPartner}>Out Partners</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to={PathUser.userDonate}>Donate</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to={PathUser.userAboutUs}>Blog</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" to={PathUser.userHelp}>Help Centre</Link>
                                </li>
                            </ul>
                      </div>
                  </div>
              </div>
          </div> 
        </header>
    );
}

export default Header;
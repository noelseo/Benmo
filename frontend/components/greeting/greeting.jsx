import React from 'react';
import { Link } from "react-router-dom";

class Greeting extends React.Component {
    render(){
        return (
            <nav className="greeting">
                <div className="greeting-top">
                    <Link to="/">
                        <img className="benmologo" src={window.benmologo} />
                    </Link>

                    <Link className="sign-in-button" to="/sign-in">Sign In</Link>
                <div className="header-line"></div>
                </div>

                <div className="greeting-middle">
                    <div className="greeting-middle-a">
                        <video className="phones" autoPlay loop muted preload="auto">
                            <source src={window.phonesURL} type="video/mp4" />
                        </video>
                    </div>

                    <div className="greeting-middle-b">
                        <div className='greeting-middle-message'>
                            <h1>
                                Send money and
                                    <br />
                                make purchases at
                                    <br />
                                approved merchants
                                </h1>
                        </div>

                        <div className="greeting-middle-signup1">or with your <Link className="greeting-middle-signup2" to="/signup">email address</Link>

                        <div id="noel">
                            <div id="github">
                                <a href="https://github.com/noelseo">
                                    <img src={window.github} width="75px" height="73px" id="github" />
                                </a>
                            </div>
                            <div id="linkedin">
                                <a href="https://www.linkedin.com/in/noelseo/">
                                    <img src={window.linkedin} width="50px" height="50px" id="linkedin" />
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <footer>
                    <div className="footer-inner">

                            <div className="footer-line"></div>

                            <div className="footer-top">
                                <div className="footer-section">
                                    <h4>Learn More</h4>
                                    <ul>
                                        <li>How it works</li>
                                        <li>Our Fees</li>
                                        <li>Business</li>
                                        <li>Card</li>
                                        <li>Security</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                                <div className="footer-section">
                                    <h4>Company</h4>
                                    <ul>
                                        <li>Our Team</li>
                                        <li>Jobs</li>
                                    </ul>
                                </div>
                                <div className="footer-section">
                                    <h4>Community</h4>
                                    <ul>
                                        <li>Blog</li>
                                        <li>Help Center</li>
                                        <li>Developer</li>
                                    </ul>
                                </div>
                                <div className="footer-section">
                                    <h4>Terms</h4>
                                    <ul>
                                        <li>Legal</li>
                                        <li>Privacy</li>
                                    </ul>
                                </div>

                                <div className="footer-section">
                                    <div className="footer-section-inner">
                                        <a>
                                        {/* <a href="https://itunes.apple.com/us/app/venmo/id351727428?mt=8"> */}
                                            <img class="download-links" src="https://cdn1.venmo.com/production/images/AppStore.png" />
                                        </a>

                                        <div className="footer-section-inner-middle"></div>

                                        <a>
                                        {/* <a href="https://play.google.com/store/apps/details?id=com.venmo"> */}
                                            <img class="download-links" src="https://cdn1.venmo.com/production/images/PlayStore.png" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        

                        <div className="footer-middle"></div>
                        
                
                        <div className="footer-bottom">
                            <p>
                                Benmo is a not service of PayPal, Inc., a licensed provider of money transfer services (NMLS ID: 910457143423). All money transmission is not provided by PayPal, Inc. pursuant to PayPal, Inc.’s licenses. © 2019 Not PayPal, Inc.
                            </p>
                        </div>
                    </div>
                </footer>
                
            </nav>
        )
    }
}

export default Greeting;
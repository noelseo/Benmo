// import React from 'react';
// import { Link } from "react-router-dom";

// const Greeting = ({ currentUser, logout }) => {
// //above is same as below
// //class Greeting extends React.Component {
// //   const { currentUser, logout } = this.props;
// //}

//     //before user logging in
//     const sessionLinks = () => (
//         <nav className="greeting-bar">
//             <Link to="/">
//                 <img className="benmologo" src={window.benmologo} />
//             </Link>
//             {/* <img className="benmologo" src={window.benmologo}/> */}
//             <Link className="sign-in-button" to="/sign-in">Sign In</Link>
//             <div className="main">
//                 <div className="main-a">
//                     <video className="phones" autoPlay loop muted preload="auto">
//                         <source src={window.phonesURL} type="video/mp4" />
//                     </video>
//                 </div>

//                 <div className="main-b">
//                     <div className='main-message'>
//                         <h3>
//                             Send money and
//                                 <br />
//                             make purchases at
//                                 <br />
//                             approved merchants
//                             </h3>
//                     </div>

//                     <div className="main-signup1">or with your <Link className="main-signup2" to="/signup">email address</Link>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );


//     //after using logged in
//     const loggedIn = () => {
//         return (
//             <hgroup className="header-group">
//                 <Link to="/">
//                     <img className="benmologo" src={window.benmologo} />
//                 </Link>
//                 {/* <img className="benmologo" src={window.benmologo} /> */}
//                 {/* <h2 className="current-user">Welcome {currentUser.first_name} {currentUser.last_name}</h2> */}
//                 <button className="log-out-button" onClick={logout}>Log Out</button>
//             </hgroup>
//         )
//     }

//     return currentUser ? loggedIn() : sessionLinks();
// };


// export default Greeting;


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
                                    app store
                                </div>
                                <div className="footer-section">
                                    google play
                                </div>
                            </div>
                        

                        <div className="footer-middle"></div>
                        
                
                        <div className="footer-bottom">
                            <p>
                                Venmo is a service of PayPal, Inc., a licensed provider of money transfer services (NMLS ID: 910457). All money transmission is provided by PayPal, Inc. pursuant to 
                            </p>
                        </div>
                     


                    </div>
               

                </footer>
                
            </nav>
        )
    }
}

export default Greeting;
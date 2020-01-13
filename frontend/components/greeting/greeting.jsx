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
            <nav className="greeting-bar">

                <Link to="/">
                    <img className="benmologo" src={window.benmologo} />
                </Link>

                <Link className="sign-in-button" to="/sign-in">Sign In</Link>

                <div className="main">
                    <div className="main-a">
                        <video className="phones" autoPlay loop muted preload="auto">
                            <source src={window.phonesURL} type="video/mp4" />
                        </video>
                    </div>

                    <div className="main-b">
                        <div className='main-message'>
                            <h3>
                                Send money and
                                    <br />
                                make purchases at
                                    <br />
                                approved merchants
                                </h3>
                        </div>

                        <div className="main-signup1">or with your <Link className="main-signup2" to="/signup">email address</Link>
                        </div>
                    </div>
                </div>
                
            </nav>
        )
    }
}

export default Greeting;
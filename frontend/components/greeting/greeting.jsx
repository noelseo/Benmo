import React from 'react';
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
//above is same as below
//class Greeting extends React.Component {
//   const { currentUser, logout } = this.props;
//}


    //before user logging in
    const sessionLinks = () => (
        <nav className="greeting-bar">
            <img className="benmologo" src={window.benmologo} />
            <Link className="sign-in-button" to="/sign-in">Sign In</Link>
        </nav>
    );


    //after using logged in
    const loggedIn = () => (
        <hgroup className="header-group">
            <img className="benmologo" src={window.benmologo} />
            <h2 className="current-user">Welcome {currentUser.first_name} {currentUser.last_name}</h2>
            <button className="log-out-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? loggedIn() : sessionLinks();
};


export default Greeting;

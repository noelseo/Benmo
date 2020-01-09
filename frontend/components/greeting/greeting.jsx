import React from 'react';
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {

//class Greeting extends React.Component {
//   const { currentUser, logout } = this.props;
//}

    const sessionLinks = () => (
        <nav className="signin">
            <Link to="/sign-in">Sign In</Link>
            {/* <Link to="/signup">Sign Up</Link> */}
        </nav>
    );

    const loggedIn = () => (
        <hgroup className="header-group">
            <h2 className="header-name">{currentUser.first_name}{currentUser.last_name}</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? loggedIn() : sessionLinks();
};


export default Greeting;

import React from 'react';
import { Link } from "react-router-dom";

const Navbar = ({ logout }) => {
    //after using logged in
    return (
        <hgroup className="header-group">
            <Link to="/">
                <img className="benmologo" src={window.benmologo} />
            </Link>
            <button className="log-out-button" onClick={logout}>Log Out</button>
        </hgroup> 
    )
}

export default Navbar;

import React from 'react';
import { Link } from "react-router-dom";

const Navbar = ({ currentUser, logout }) => {
    //after using logged in
    return (
        <div className="navbar-box-inner">
            {/* <div className="navbar-box-left">
                <Link to="/">
                    <img className="benmologo-navbar" src={window.benmologonavbar} />
                </Link>
            </div> */}

            <div className="navbar-box-right">
                <button className="navbar-logout-button" onClick={logout}>Log Out</button>
                <Link>
                    <p className="navbar-text">Help</p>
                </Link>

                <Link>
                    <p className="navbar-text">Settings</p>
                </Link>

                <Link>
                    <p className="navbar-text">Statement</p>
                </Link>

                <Link>
                    <h3 className="navbar-fullname">{currentUser.first_name} {currentUser.last_name}</h3>
                </Link>

            </div>
            
        </div>
    )
}

export default Navbar;

import React from 'react';
import Greeting from "../greeting/greeting_container";
import { Link } from "react-router-dom";

class Main extends React.Component {

    render() {
        return (
            <div>
                <nav>
                    <Greeting />
                </nav>

                <div>
                    <figure className="android">
                        <img src={window.androidURL} />
                    </figure>

                    <figure className="iphone">
                        <img src={window.iphoneURL} />
                    </figure>
                </div>

                <div className="main">
                    <div id='a'>
                        <h3>
                            Send money and
                            <br/>
                            make purchases at
                            <br/>
                            approved merchants
                        </h3>
                    </div>

                    <div id="b">
                        or with your <Link id="b1" to="/signup">email address</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
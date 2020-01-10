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

                <div className="main">

                    <div className="main-a">
                        <video className="phones" autoPlay loop muted preload="auto">
                            <source src={window.phonesURL} type="video/mp4"/>
                        </video>
                    </div>

                    <div className="main-b">
                        <div className='main-message'>
                            <h3>
                                Send money and
                                <br/>
                                make purchases at
                                <br/>
                                approved merchants
                            </h3>
                        </div>

                        <div className="main-signup1">or with your <Link className="main-signup2" to="/signup">email address</Link>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Main;
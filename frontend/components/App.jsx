import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from "../util/route_util";
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';


const App = () => (
    <div>
        <header>
            <h1>Benmo</h1>
            {/* <GreetingContainer /> */}
        </header>

        <Route path="/" component={GreetingContainer} />
        <AuthRoute path="/sign-in" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;
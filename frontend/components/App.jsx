import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';


const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={GreetingContainer} />
            <AuthRoute path="/sign-in" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            
            <Redirect to="/" />
        </Switch>
    </div>
);

export default App;
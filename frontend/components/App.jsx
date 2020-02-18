// root.jsx

import React from 'react';
import HomeContainer from './home/home_container';
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
    <div className="app-jsx">
        <Switch>
            <Route exact path="/" component={HomeContainer} />
            <AuthRoute path="/sign-in" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            
            <Redirect to="/" />
        </Switch>
    </div>
);

export default App;

// Route: 
// AuthRoute: only accessible when NOT logged in
// ProtectedRoute: only accessible ONLY when logged in

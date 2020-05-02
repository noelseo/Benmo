import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import DashboardContainer from '../dashboard/dashboard_container';

const Home = ({ currentUser }) => {

    //before user logging in
    const notLoggedIn = () => (
        <GreetingContainer />
    );

    //after using logged in
    const loggedIn = () => (
        <DashboardContainer /> 
    );

    return currentUser ? loggedIn() : notLoggedIn();
};

export default Home;

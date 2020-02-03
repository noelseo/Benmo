import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import Dashboard from '../dashboard/dashboard_container';

const Home = ({ currentUser }) => {

    //before user logging in
    const sessionLinks = () => (
        <GreetingContainer />
    );


    //after using logged in
    const loggedIn = () => { 
        return <Dashboard /> 
    }

    return currentUser ? loggedIn() : sessionLinks();
};


export default Home;

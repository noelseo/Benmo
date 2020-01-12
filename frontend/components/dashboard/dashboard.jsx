import React from 'react';
import Profile from './profile/profile';
import Greeting from '../greeting/greeting';
import Navbar from './navbar/navbar';


class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Greeting />
                <Navbar />
                {/* <Profile /> */}
            </div>
        );
    }
}

export default Dashboard;
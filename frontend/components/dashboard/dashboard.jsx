import React from 'react';
import ProfileContainer from './profile/profile_container';
import NavbarContainer from './navbar/navbar_container';


class Dashboard extends React.Component {
    render() {
        return (
            <div>

                <div className="dashboard-top">
                    <div><NavbarContainer /></div>    
                </div>

                <div className="dashboard-bottom">

                    <div className="dashboard-left">
                        <div className="pay-box">Pay</div>
                        <div className="friend-request-box">FriendRequest</div>
                        <div className="transaction-history-box">TransactionHistory</div>
                    </div>
                    
                    <div className="dashboard-right">
                        <div className="profile-box"><ProfileContainer /></div>
                        <div className="friends-box">Friends</div>
                    </div>
                    
                </div>

            </div>

        );
    }
}

export default Dashboard;
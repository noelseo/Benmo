import React from 'react';
import ProfileContainer from './profile/profile_container';
import NavbarContainer from './navbar/navbar_container';
import TransactionHistoryContainer from './transaction_history/transaction_history_container';
import FriendsContainer from './friends/friends_container';
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard-all">

                <div className="dashboard-top">

                    <div className="dashboard-top-middle">

                        <div className="dashboard-top-middle-left">
                            <div className="dashboard-benmologo">
                                <Link to="/">
                                    <img src={window.benmologonavbar} />
                                </Link>
                            </div>

                            <div className="dashboard-home">
                                <Link to="/">Home</Link>
                            </div>
                        </div>

                        <div className="dashboard-top-middle-right">
                            <div className="menu">
                                <div><NavbarContainer /></div>    
                            </div>
                        </div>

                    </div>
                    
                </div>




                <div className="dashboard-bottom">
                

                    <div className="dashboard-bottom-middle">

                        <div className="dashboard-bottom-left">
                            <div className="dashboard-pay-box">
                                <div className="dashboard-pay-box-inner">Initiate Transactions</div>
                                <div className="dashboard-pay-div"><Link className="dashboard-pay-text">Pay</Link></div>
                            </div>
                            <div className="dashboard-friend-request-box">
                                <div className="dashboard-friend-request-box-inner">Friend Requests</div>
                            </div>
                            <div className="dashboard-transaction-history-box">
                                <div className="dashboard-transaction-history-box-inner">Transactions History</div> 
                                <TransactionHistoryContainer />
                            </div>
                        </div>

                        <div className="dashboard-bottom-right">
                            <div className="dashboard-profile-box"><ProfileContainer /></div>
                            <div className="dashboard-friends-box">
                                <div className="dashboard-friends-box-inner">Friends</div>
                                <div><FriendsContainer /></div>
                            </div>
                        </div>

                    </div>
                    
                </div>

            </div>

        );
    }
}

export default Dashboard;
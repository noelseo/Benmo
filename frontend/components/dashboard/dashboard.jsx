import React from 'react';
import ProfileContainer from './profile/profile_container';
import NavbarContainer from './navbar/navbar_container';
import TransactionHistoryContainer from './transaction_history/transaction_history_container';
import FriendsContainer from './friends/friends_container';
import { Link } from "react-router-dom";

class Dashboard extends React.Component {


    // formatPrice(obj) {
    // //remove any existing decimal
    // p = obj.value.replace('.', '');

    // //get everything except the last 2 digits
    // var l = p.substring(-2, p.length - 2);

    // //get the last 2 digits
    // var r = p.substring(p.length - 2, p.length);

    // //update the value
    // obj.value = l + '.' + r;
    // }

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
                                <div className="dashboard-pay-div">

                                    {/* <div class="dashboard-pay-form">
                                        <select name="dashboard-pay-form-dropdown" id="">
                                            {/* <option selected="selected" value="Operation">Mr.</option> */}
                                            <option value="0">friend1</option>
                                            <option value="1">friend2</option>
                                            <option value="2">friend3</option>
                                        </select>
                                        <label>Amount</label>
                                        {/* <input type="number" min="0.00" max="10000.00" step="0.01" /> */}
                                        <input type="number" id="price" onchange="formatPrice(this)" />
                                    </div> */}
                                    
                                    <input type="submit" value=""/>
                                    <Link className="dashboard-pay-text">Pay</Link>
                                </div>
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
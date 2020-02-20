import React from 'react';
import ProfileContainer from './profile/profile_container';
import NavbarContainer from './navbar/navbar_container';
import TransactionHistoryContainer from './transaction_history/transaction_history_container';
import FriendsContainer from './friends/friends_container';
import { Link } from "react-router-dom";
import PayeesContainer from './payees/payees_container';
import ChartistGraph from "react-chartist";
import { fetchGraphData } from '../../util/transaction_api_util';


class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            amount: 0, 
            receiver_id: null,
            data: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // graph
    componentDidMount() {
        fetchGraphData(this.props.currentUser.id).then(res => {
            console.log(res);
            
            this.setState({
                data: [{"name": "Sent Payments", "data": res.sent_transactions}, {"name": "Received Payments", "data": res.received_transactions}]
            })
        });
    }

    handleChange(e, field) {
        if (field === "amount" && parseFloat(e.target.value) < 0) {
            this.setState({ [field]: 0 });
        } else {
            this.setState({ [field]: parseFloat(e.target.value).toFixed(2) });
        }
        
        // console.log( typeof e.target.value );  => shows as string
    }

    handleSubmit(e) {
        if (parseFloat(this.state.amount) === 0) {
            alert("You must give a valid amount");
        } else if (this.state.receiver_id === null) {
            alert("You must select a payee");
        } else {
            this.props.createATransaction(this.state, this.props.currentUser);
        }
    }

    render() {

        const data = {
            labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
            series: [...this.state.data]
        };

        const type = "Line";

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

                            {/* Pay */}
                            <div className="dashboard-pay-box">

                                <div className="dashboard-pay-box-inner">Initiate Transactions</div>

                                <div className="dashboard-pay-box-inner-low">
                                    {/* #1 */}
                                    <div className="dashboard-pay-dropdown">
                                        <PayeesContainer handleChange={this.handleChange}/>
                                    </div>
                                    
                                    {/* #2 */}
                                    <div className="amount-box">
                                        <span className="currency">$</span>
                                        <input className="dashboard-pay-amount" type="number" placeholder="How much?" onChange={(e) => this.handleChange(e, "amount")} /> {/* if you're not in a form, don't use input:submit */}
                                    </div>

                                    {/* #3 */}
                                    {/* very front */}
                                    <button className="dashboard-pay-button" onClick={this.handleSubmit}>Pay</button>
                                </div>
                                    

                            </div>



                            {/* Graph */}
                            <div className="dashboard-friend-request-box">
                                <div className="dashboard-friend-request-box-inner">Weekly Stats</div>
                                    <ul className="ct-legend">
                                        <li className="ct-series-0">Sent Payments</li>
                                        <li className="ct-series-1">Received Payments</li>
                                    </ul>
                                    <ChartistGraph data={data} type={type} />
                            </div>



                            {/* Transaction History */}
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
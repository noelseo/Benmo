import React from 'react';
import TransactionHistoryContainer from '../transaction_history/transaction_history_container'

class Profile extends React.Component {
    render() {
        const { currentUser } = this.props;
        return (
            <div className="profile">

                <div className="name-part">
                    <h3 className="profile-fullname">{currentUser.first_name} {currentUser.last_name}</h3>
                </div>
                <br/>

                <div className="gray_bottom_divider"></div>
                <br/>

                <div className="balance-and-funding-part">
                    <h6 className="balance">${currentUser.balance}</h6>
                    <a href="#" className="funding">Get Ready to Pay »</a>
                </div>

                <TransactionHistoryContainer />

            </div>
        );
    }
}

export default Profile;
import React from 'react';
import TransactionHistoryContainer from '../transaction_history/transaction_history_container'

class Profile extends React.Component {
    render() {
        const { currentUser } = this.props;
        return (

            <div className="profile-box">

                <h3 className="profile-fullname">{currentUser.first_name} {currentUser.last_name}</h3>
                <h6 className="balance">${currentUser.balance}</h6>
                <a href="#" className="funding">Get Ready to Pay »</a>

            </div>
        );
    }
}

export default Profile;
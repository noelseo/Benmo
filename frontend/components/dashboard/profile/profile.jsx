import React from 'react';

class Profile extends React.Component {
    render() {
        const { currentUser } = this.props;
        return (

            <div className="profile-box">

                <h3 className="profile-fullname">{currentUser.first_name} {currentUser.last_name}</h3>
                <h6 className="balance">${currentUser.balance.toFixed(2)}</h6>
                <a href="#" className="funding"></a>
                {/* <a href="#" className="funding">Add More Funds »</a> */}

            </div>
        );
    }
}

export default Profile;
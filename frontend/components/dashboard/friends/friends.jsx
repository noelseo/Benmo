import React from 'react';
import Modal from '../modal/modal';

class Friends extends React.Component {

    constructor(props) {
        super(props);
        this.state = { show: false, selectedFriend: null };
    }

    componentDidMount() {
        this.props.clearFriends();
        this.props.fetchAllFriends(this.props.currentUser);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal(friend) {
        this.setState({ show: true, selectedFriend: friend });
    };

    hideModal() {
        this.setState({ show: false, selectedFriend: null });
    };

    render() {
        return(
            <div>
                
                <Modal show={this.state.show} handleClose={this.hideModal} friend={this.state.selectedFriend} />

                {this.props.friends.map((friend, i) => (
                    <div className="friends-each">
                        {/* <Link key={i} className="friends-fullname">{friend.first_name} {friend.last_name}</Link> */}
                        <button key={i} className="friends-fullname" onClick={ () => this.showModal(friend) }>{friend.first_name} {friend.last_name}</button>
                    </div>
                ))}

            </div>
        )
    }
}

export default Friends;
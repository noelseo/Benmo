import React from 'react';
import { Link } from "react-router-dom";


class Friends extends React.Component {

    componentDidMount() {
        this.props.clearFriends();
        this.props.fetchAllFriends(this.props.currentUser);
    }

    render() {
        return(
            <div>
                {this.props.friends.map((friend, i) => (
                    <div className="friends-each">
                        <Link key={i} className="friends-fullname">{friend.first_name} {friend.last_name}</Link>
                    </div>
                ))}
            </div>
        )
    }
}

export default Friends;
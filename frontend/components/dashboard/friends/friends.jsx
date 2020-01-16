import React from 'react';
import { Link } from "react-router-dom";

class Friends extends React.Component {

    componentDidMount() {
        this.props.fetchAllFriends(this.props.currentUser)
    }

    render() {
        return(
            <div>
                {this.props.friends.map((friend, i) => (
                    <Link><div key={i}>{friend.first_name} {friend.last_name}</div></Link>
                ))}
            </div>
        )
    }
}

export default Friends;
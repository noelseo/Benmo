import React from 'react';
import { Link } from "react-router-dom";


class Payees extends React.Component {

    componentDidMount() {
        this.props.clearFriends();
        this.props.fetchAllFriends(this.props.currentUser);
        
    }
    
    render() {
        
        const { friends } = this.props;
      
        if (this.props.friends === undefined) {
            return "";
        } else {
            return (

                <div>
                    <select onChange={(e) => this.props.handleChange(e, "receiver_id")}>
                        <option defaultValue="Select">Select a friend</option>
                        {friends.map((friend, i) => { //React parses each item in an array as an element in the map function. forEach doesn't work 
                            return <option key={i} value={friend.id}>{friend.first_name} {friend.last_name}</option>
                        }
                        )}
                    </select>
                </div>
            )
        }
    }
}

export default Payees;
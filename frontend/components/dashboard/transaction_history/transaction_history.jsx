import React from 'react';

class TransactionHistory extends React.Component {

    // componentDidMount() {
    //     this.props.getAll(this.props.currentUser)
    // }

    render() {

        const { currentUser } = this.props;
        debugger
        return (
            <div>
                <div>
                    {/* {currentUser.transactions.map()} */}
                </div>
            </div>
        );
    
    }
}

export default TransactionHistory;
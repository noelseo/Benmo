import React from 'react';


class TransactionHistory extends React.Component {

    componentDidMount() {
        this.props.fetchAll(this.props.currentUser)
         //calls the 'fetchAll' function from the container that calls from transaction_actions.js
    } 

    render() {
        const { currentUser, transactions } = this.props;

        return (
            <div>
                <ul>
                    {
                        transactions.map((transaction, i) => <li key={i}>{transaction.created_at}</li>)
                    }
                </ul>
            </div>
        );
    }
}

export default TransactionHistory;
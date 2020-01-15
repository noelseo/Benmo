import React from 'react';


class TransactionHistory extends React.Component {

    constructor(props){
        super(props);
        this.getDate = this.getDate.bind(this);
    }

    componentDidMount() {
        this.props.clearTransactions()
        this.props.fetchAll(this.props.currentUser)
         //calls the 'fetchAll' function from the container that calls from transaction_actions.js
    } 

    getDate(string) {
        const month = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"]
        let date = new Date(Date.parse(string));
        
        return (
            `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} at ${date.toTimeString().slice(0, 5)}`
        )
    }

    render() {
        const { currentUser, transactions } = this.props;

        return (
            <div className="transaction-history-box">
                    {
                        transactions.map((transaction, key) => (
                        <div key={key} className="transaction-history">
                            
                            <div className="transaction-history-middle">
                                <div className="transaction-history-left">
                                    <div className="transaction-history-names">{transaction.sender.first_name} {transaction.sender.last_name}   <div id="paid">paid</div>  {transaction.receiver.first_name} {transaction.receiver.last_name}</div>
                                    <p className="transaction-history-date">{this.getDate(transaction.created_at)}</p>
                                </div>

                                <div className="transaction-history-right">
                                    
                                        <p className={currentUser.id === transaction.sender_id ? "transaction-history-amount-minus" : "transaction-history-amount"}>{currentUser.id === transaction.sender_id ? "-" : ""}${transaction.amount.toFixed(2)}</p>
                                </div>
                            </div>

                        </div>                            
                        ))
                    }
            </div>
        );
    }
}

export default TransactionHistory;



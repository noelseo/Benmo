import React from 'react';

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            selectedFriend: null,
            amount: 0,
            receiver_id: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e, field) {
        if (field === "amount" && parseFloat(e.target.value) < 0) {
            this.setState({ [field]: 0 });
        } else {
            this.setState({ [field]: parseFloat(e.target.value).toFixed(2) });
        }
        
        // console.log( typeof e.target.value );  => shows as string
    }

    handleSubmit(e) {
        if (parseFloat(this.state.amount) === 0) {
            alert("You must give a valid amount");
        } else {
            this.setState({ selectedFriend: this.props.friend, receiver_id: this.props.friend.id }, 
                () => {
                    this.props.createATransaction(
                    this.state,
                    this.props.currentUser
                    );
                })
        }
    }

    render() {
        const { handleClose, show, friend } = this.props;
        const showHideClassName = show ? "modal display-block" : "modal display-none";

        if (!friend) {
            return null;
        } else {
            return (
                <div className={showHideClassName}>
                    <section className="modal-main">
                    <span className="modal-recipient">{friend.first_name}</span>

                    {/* #2 */}
                    <div className="amount-box">
                        <span className="currency">$</span>
                        <input
                        className="dashboard-pay-amount"
                        type="number"
                        placeholder="How much?"
                        onChange={e => this.handleChange(e, "amount")}
                        />{" "}
                        {/* if you're not in a form, don't use input:submit */}
                    </div>

                    {/* #3 */}
                    {/* very front */}
                    <button className="dashboard-pay-button" onClick={this.handleSubmit}>
                        Pay
                    </button>


                    <button className="modal-button" onClick={handleClose}>
                        <p className="modal-button-text"> x </p>
                    </button>
                    </section>
                </div>
            );
        }
    }

}

export default Modal;
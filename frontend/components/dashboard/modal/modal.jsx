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
            this.setState({ show: false, selectedFriend: this.props.friend, receiver_id: this.props.friend.id }, 
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

                        <div className="modal-top">
                            <span className="modal-recipient"> {friend.first_name}</span>
                            
                            <button className="modal-button" onClick={handleClose}>
                                <div className="modal-button-text"> x </div>
                            </button>
                        </div>

                        <div className="modal-amount-box">
                            <span className="modal-currency">$</span>
                            <input
                            className="modal-pay-amount"
                            type="number"
                            placeholder="How much?"
                            onChange={e => this.handleChange(e, "amount")}
                            />
                            {/* if you're not in a form, don't use input:submit */}
                        </div>

                        <button className="modal-pay-button" onClick={this.handleSubmit}>
                            Pay
                        </button>

                    </section>
                </div>
            );
        }
    }

}

export default Modal;
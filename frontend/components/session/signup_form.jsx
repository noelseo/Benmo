import React from "react";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { first_name: "", last_name: "", email: "", phone_number: "", password: "" }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                FIRST NAME
                <input type="text" value={this.state.first_name} onChange={this.update('first_name')} />
                LAST NAME
                <input type="text" value={this.state.last_name} onChange={this.update('last_name')} />
                <br/>
                EMAIL<br/>
                <input type="text" value={this.state.email} onChange={this.update('email')} />
                <br/>
                PHONE NUMBER<br/>
                <input type="text" value={this.state.phone_number} onChange={this.update('phone_number')} />
                <br/>
                PASSWORD<br/>
                <input type="text" value={this.state.password} onChange={this.update('password')} />
                <br/>
                <input type="submit" />
            </form>
        );
    }
}

export default SessionForm;
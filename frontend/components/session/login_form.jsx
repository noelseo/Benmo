import React from "react";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "" }
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
            <form onSubmit={this.handleSubmit}>Sign in to Benmo
                EMAIL<input type="text" value={this.state.email} onChange={this.update('email')}/>
                PASSWORD<input type="password" value={this.state.password} onChange={this.update('password')}/>
                <input type="submit"/>
            </form>
        );
    }
}

export default SessionForm;
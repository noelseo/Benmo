import React from "react";

class LoginForm extends React.Component {
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
        this.props.processForm(this.state)
            .then(() => this.props.history.push('/'));
    }

    render() {
        return (
            <div className="auth-login">
                <div className="auth-header-text">
                    <h2>Sign in to Benmo</h2>
                </div>

                <form className="auth-form" onSubmit={this.handleSubmit}>
                    <div className="inputs">

                        <label className="a">
                            <span className="a1">EMAIL</span>
                            <input className="email" type="text" value={this.state.email} onChange={this.update('email')}/>
                            <span className="a2">Required</span>
                        </label>

                        <label className="b">
                            <span className="b1">PASSWORD</span>
                            <input className="password" type="password" value={this.state.password} onChange={this.update('password')} placeholder="••••••••"/>
                            <span className="b2">Required</span>
                        </label>

                        <input type="submit"/>
                    </div>
                </form>

            </div>
        );
    }
}

export default LoginForm;
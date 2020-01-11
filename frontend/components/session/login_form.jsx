import React from "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "" }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
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

    componentDidMount() {
        this.props.clearSessionErrors();
    }

    render() {
        return (
            <div>
                <Link to="/">
                    <img className="benmologo" src={window.benmologo} />
                </Link>

                <div className="auth-signin">

                    <div className="login-error-message">
                        {this.renderErrors()}
                    </div>

                    <div className="auth-login">
                        <div className="auth-header-text">
                            <h1>Sign in to Benmo</h1>
                        </div>

                        <form className="auth-form" onSubmit={this.handleSubmit}>

                            <div className="inputs">

                                <label className="login-label">
                                    <span className="login-span">EMAIL</span>
                                    <input className="login-input" type="text" value={this.state.email} onChange={this.update('email')}/>
                                    {/* <span className="a2">Required</span> */}
                                </label>

                                <label className="login-label">
                                    <span className="login-span">PASSWORD</span>
                                    <input className="login-input" type="password" value={this.state.password} onChange={this.update('password')} placeholder="••••••••"/>
                                    {/* <span className="b2">Required</span> */}
                                </label>

                                <div className="login-bottom">
                                    <input className="submit-button" type="submit"/>
                                    <br/>
                                    <button onClick={this.handleDemo} className="demo-button" id="demo-login">Demo Sign In</button>
                                </div>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        );
    }

    //errors (refer to controllers)
    renderErrors() {
        return (this.props.errors.map((error, i) => ( //error returns an array
            <div className="error-div">
                <div key={`error-${i}`} className="login-error">{ error }</div>
            </div>
        )))
    }


    //demo login
    demo(user) {
        const intervalSpeed = 75;
        const { email, password } = user;
        const demoEmailTime = email.length * intervalSpeed;
        const demoPasswordTime = password.length * intervalSpeed;
        const buffer = intervalSpeed * 2;
        const totalDemoTime = demoEmailTime + demoPasswordTime + buffer;
        this.demoEmail(email, intervalSpeed);
        setTimeout(() => this.demoPassword(password, intervalSpeed), demoEmailTime);
        setTimeout(() => this.props.processForm(user), totalDemoTime + 300);
    }

    demoEmail(email, intervalSpeed) {
        let i = 0;
        setInterval(() => {
            if (i <= email.length) {
                this.setState({ email: email.slice(0, i) });
                i++;
            } else {
                clearInterval();
            }
        }, intervalSpeed);
    }
    
    demoPassword(password, intervalSpeed) {
        let j = 0;
        setInterval(() => {
            if (j <= password.length) {
                this.setState({ password: password.slice(0, j) });
                j++;
            } else {
                clearInterval();
            }
        }, intervalSpeed);
    }

    handleDemo(e) {
        e.preventDefault();
        const user = Object.assign({}, {
            email: 'benmo@benmo.com',
            password: 'password'
        });
        this.demo(user);
    }

}

export default LoginForm;
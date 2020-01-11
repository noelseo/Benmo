import React from "react";
import { Link } from "react-router-dom";


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
        this.props.processForm(this.state)
            .then(() => this.props.history.push('/'));
    }

    facebookButton() {
        return window.open("https://www.facebook.com/login.php?skip_api_login=1&api_key=180347063770&kid_directed_site=0&app_id=180347063770&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.4%2Fdialog%2Foauth%3Fapp_id%3D180347063770%26cbt%3D1578539406578%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter.php%253Fversion%253D45%2523cb%253Df2d0c4589676c14%2526domain%253Dvenmo.com%2526origin%253Dhttps%25253A%25252F%25252Fvenmo.com%25252Ff25adeafd3a07b4%2526relation%253Dopener%26client_id%3D180347063770%26display%3Dpopup%26domain%3Dvenmo.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fvenmo.com%252Fsignup%252Femail%26locale%3Den_US%26logger_id%3Dfc3f3bff078da4%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter.php%253Fversion%253D45%2523cb%253Df2580dca0c46ed4%2526domain%253Dvenmo.com%2526origin%253Dhttps%25253A%25252F%25252Fvenmo.com%25252Ff25adeafd3a07b4%2526relation%253Dopener%2526frame%253Df163c385a3782ac%26response_type%3Dtoken%252Csigned_request%26scope%3Demail%252Cpublic_profile%252Cuser_friends%26sdk%3Djoey%26version%3Dv2.4%26ret%3Dlogin%26fbapp_pres%3D0&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D45%23cb%3Df2580dca0c46ed4%26domain%3Dvenmo.com%26origin%3Dhttps%253A%252F%252Fvenmo.com%252Ff25adeafd3a07b4%26relation%3Dopener%26frame%3Df163c385a3782ac%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=en_US&pl_dbl=0", "myWindow", "width=300,height=400")
    }

    render() {
        return (
            <div>
                <Link to="/">
                    <img className="benmologo" src={window.benmologo} />
                </Link>
                <div className="auth-signup">

                    <div className="auth-header-text">
                        <h1>Create your account</h1>
                        <br/>
                        <br/>
                        
                        <button className="facebook-button" onClick={this.facebookButton}>
                            <span className="facebook-logo"></span>
                            <span className="facebook-text">Sign Up with Facebook</span>
                        </button>
                    </div>

                    <form className="auth-form" onSubmit={this.handleSubmit}>

                        <div className="inputs">

                            <div className="fullname">
                                <label className="error auth-form-input-label first-last-name first-name">
                                    <span className="label-text">FIRST NAME</span>
                                    <input className="auth-form-input" type="text" value={this.state.first_name} onChange={this.update('first_name')} placeholder="Jane"/>
                                    {/* <span className="error-text">Required</span> */}
                                </label>
                            
                                <label className="error auth-form-input-label first-last-name last-name">
                                    <span className="label-text">LAST NAME</span>
                                    <input className="auth-form-input" type="text" value={this.state.last_name} onChange={this.update('last_name')} placeholder="Smith"/>
                                    {/* <span className="error-text">Required</span> */}
                                </label>
                            </div>

                            

                            <label className="auth-form-input-label email">
                                <span className="label-text">EMAIL</span>
                                <input className="auth-form-input" type="text" value={this.state.email} onChange={this.update('email')} placeholder="email@example.com"/>
                                {/* <span className="error-text">Required</span> */}
                            </label>

                            <label className="auth-form-input-label phone">
                                <span className="label-text">PHONE</span>
                                <input className="auth-form-input" type="tel" value={this.state.phone_number} onChange={this.update('phone_number')} placeholder="(234)567-8901"/>
                                {/* <span className="error-text">Required</span> */}
                            </label>

                            <label className="auth-form-input-label password">
                                <span className="label-text">PASSWORD</span>
                                <input className="auth-form-input" type="password" value={this.state.password} onChange={this.update('password')} placeholder="••••••••" />
                                {/* <span className="error-text">Required</span> */}
                            </label>

                        </div>

                        <div className="bottom">
                            <a href="https://venmo.com/legal/us-helpful-information" className="helpful-info">Helpful Information</a>

                            <input className="sign-up-button" type="submit" value="Sign Up"/>
                        </div>
                        
                        <div className="footer">
                            <p>
                                By submitting, you confirm that you are authorized to use the number entered and agree to receive SMS texts to verify you own the number. Carrier fees may apply.
                            </p>
                        </div>
                    </form>

                </div>

            </div>
        );
    }


    //errors 
    renderErrors() {
        return (this.props.errors.map((error, i) => (
            <div key={`signup-error-${i}`} className="signin-error">{error}</div>
        )))
    }

    
}

export default SessionForm;
import React from "react";
import { connect } from "react-redux";
import LoginForm from "./login_form";
import * as SessionActions from "../../actions/session_actions";

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(SessionActions.login(user))
}); 

//when LoginForm calls processForm, session_reducer.js grabs the action from session_actions.js

export default connect(null, mapDispatchToProps)(LoginForm);
//maps dispatch/state then passes to login_form.jsx



//App.jsx <- -> login_form.jsx
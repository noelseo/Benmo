import React from "react";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import * as SessionActions from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => ({
    userState: { username: "", password: "" },
    errors: state.errors.session,
    formType: "Sign Up"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(SessionActions.signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
import React from "react";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import * as SessionActions from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => ({
    userState: { username: "", password: "" },
    errors: state.errors.session,
    formType: "Log In"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(SessionActions.login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
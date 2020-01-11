import React from "react";
import { connect } from "react-redux";
import SessionForm from "./signup_form";
import * as SessionActions from "../../actions/session_actions";

const mapStateToProps = state => ({
    errors: state.errors.session
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(SessionActions.signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
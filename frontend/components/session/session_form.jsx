import React from "react";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.userState;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render() {
        return (
            <form>
                
            </form>
        );
    }
}

export default SessionForm;
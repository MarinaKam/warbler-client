import React, { Component } from 'react';
import { connect } from "react-redux";
import { postNewMessage } from "../store/actions/messages";

class MessageForm extends Component {

    state = {
        message: ''
    };

    handleNewMessage = e => {
        e.preventDefault();
        this.props.postNewMessage(this.state.message);
        this.setState({message: ''});
        this.props.history.push('/');
    };

    render() {
        return (
            <form onSubmit={this.handleNewMessage}>
                {this.props.errors.message  && (
                    <div className="alert alert-danger">
                        {this.props.errors}
                    </div>
                )}
                <input
                    type="text"
                    className="form-control"
                    value={this.state.message}
                    onChange={event => this.setState({message: event.target.value})}
                />
                <button
                    type="submit"
                    className="btn btn-success pull-right"
                >
                    Add my message!
                </button>
            </form>
        );
    }
}

const mapSateToProps = state => ({
    errors: state.errors
});

export default connect(mapSateToProps, {postNewMessage})(MessageForm);
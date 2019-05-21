import React, { Component } from 'react';
import { connect } from "react-redux";

export default function withAuth(ComponentToBeRendered) {
    class Authenticate extends Component {
        componentDidMount() {
            if(this.props.isAuthenticated === false) {
                this.props.history.push("/signin");
            }
        }

        componentWillUpdate(nextProps, nextState, nextContext) {
            if(nextProps.isAuthenticated === false) {
                this.props.history.push("/signin");
            }
        }

        render() {
            return <ComponentToBeRendered {...this.props} />;
        }
    }
    const mapSateToProps = state => ({
        isAuthenticated: state.currentUser.isAuthenticated
    });

    return connect(mapSateToProps, null)(Authenticate);
}



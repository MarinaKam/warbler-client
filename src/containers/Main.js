import React from 'react';
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import { authUser } from '../store/actions/auth';
import { removeError } from '../store/actions/errors';
import MessageForm from "../components/MessageForm";
import withAuth from "../hocs/wothAuth";
import NoMatch from "../components/NoMatch";

const Main = props => {
    const { authUser, errors, removeError, currentUser } = props;
    return (
        <div className="container">
            <Switch>
                <Route
                    exact
                    path="/"
                    render={props => <Homepage currentUser={currentUser} {...props}/> }
                />
                <Route
                    exact
                    path='/signin'
                    render={ props => <AuthForm
                            removeError={removeError}
                            errors={errors}
                            onAuth={ authUser }
                            btnText="Log in"
                            heading="Welcome Back."
                            {...props}
                        />
                        }
                />
                <Route
                    exact
                    path='/signup'
                    render={ props => <AuthForm
                            removeError={removeError}
                            errors={errors}
                            signUp
                            onAuth={ authUser }
                            btnText="Sign me up!"
                            heading="Join Warbler today."
                            {...props}
                        />
                    }
                />
                <Route
                    path="/users/:id/messages/new"
                    component={withAuth(MessageForm)}
                />
                <Route component={NoMatch}/>
            </Switch>
        </div>
    );
};

const mapStateToProps = state => ({
        currentUser: state.currentUser,
        errors: state.errors
    });

export default withRouter(
    connect(mapStateToProps, { authUser, removeError })(Main)
);
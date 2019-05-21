import React, { Component } from 'react';

export default class AuthForm extends Component {
    state = {
        email: '',
        username: '',
        password: '',
        profileImageUrl: '',
    };

    handleSubmit = e => {
        e.preventDefault();
        const authType = this.props.signUp ? 'signup' : 'signin';
        this.props
            .onAuth(authType, this.state)
            .then(() => this.props.history.push('/'))
            .catch(() => {
                return;
            });
    };

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        });
    };

    render() {
        const { email, username, profileImageUrl } = this.state;
        const {
            heading,
            btnText,
            signUp,
            errors,
            history,
            removeError
        } = this.props;

        history.listen(() => removeError());

        return (
            <div>
               <div className="row justify-content-md-center text-center">
                   <div className="col-md-6">
                       <form onSubmit={this.handleSubmit}>
                           <h2>{ heading }</h2>
                           {errors.message && (
                               <div className="alert alert-danger">{errors.message}</div>
                           )}
                           { signUp && (
                               <div>
                                   <label htmlFor="username">Username:</label>
                                   <input
                                       type="text"
                                       id="username"
                                       name="username"
                                       className="form-control"
                                       onChange={this.handleChange}
                                       value={username}
                                   />
                                   <label htmlFor="image-url">Image URL:</label>
                                   <input
                                       type="text"
                                       name="profileImageUrl"
                                       id="image-url"
                                       className="form-control"
                                       onChange={this.handleChange}
                                       value={profileImageUrl}
                                   />
                               </div>
                           )}
                           <div>
                               <label htmlFor="email">Email:</label>
                               <input
                                   type="text"
                                   id="email"
                                   name="email"
                                   className="form-control"
                                   onChange={this.handleChange}
                                   value={email}
                               />
                               <label htmlFor="password">Password:</label>
                               <input
                                   type="password"
                                   name="password"
                                   id="password"
                                   className="form-control"
                                   onChange={this.handleChange}
                               />
                           </div>
                           <button
                               type="submit"
                               className="btn btn-primary btn-block btn-lg mt-3">
                               {btnText}
                           </button>
                       </form>
                   </div>
               </div>
            </div>
        );
    }
}

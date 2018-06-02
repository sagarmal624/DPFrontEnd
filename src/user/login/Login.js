import React, {Component} from 'react';
import {login} from '../../util/APIUtils';
import './Login.css';
import {ACCESS_TOKEN} from '../../constants';
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";

// import Button from "components/CustomButton/CustomButton.jsx";


class Login extends Component {
    render() {
        return (
            <div className="login-container">
                <div className="login-content">
                    <LoginForm onLogin={this.props.onLogin}/>
                </div>
            </div>
        );
    }
}

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameOrEmail: '',
            password: '',
            errorLblHide: true,
            errorMessage: '',
            loading: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    onChange = function (event) {
        const state = this.state;
        state[event.target.name] = event.target.value;
        this.setState(state);
    };

    validateForm() {
        return this.state.usernameOrEmail.length > 0 && this.state.password.length > 0;
    }


    handleSubmit(event) {
        event.preventDefault();
        const state = this.state;
        state['loading'] = true;
        this.setState(state);
        login(state)
            .then(response => {
                localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                state['loading'] = false;
                this.setState(state);
                this.props.onLogin();

            }).catch(error => {
            state['errorLblHide'] = false;
            state['loading'] = false;
            if (error.status === 401) {
                state['errorMessage'] = 'Your Username or Password is incorrect. Please try again!'
            } else {
                state['errorMessage'] = 'Sorry! Something went wrong. Please try again!'
            }
            this.setState(state);
        });
    }

    render() {
        return (
            <div>
                <div className="content-w3ls">
                    <div className="content-top-agile">
                        <h2>sign in</h2>
                    </div>
                    <div className="content-bottom">
                        {!this.state.errorLblHide ?
                            <label className="error">{this.state.errorMessage}</label>
                            : null}
                        <form onSubmit={this.handleSubmit}>
                            <div class="field-group">
                                <span className="fa fa-user" aria-hidden="true"></span>
                                <div className="wthree-field">
                                    <input type="text" placeholder="Email or Username" className="form-control"
                                           required
                                           name="usernameOrEmail" onChange={this.onChange}/>

                                </div>
                            </div>
                            <div class="field-group">
                                <span className="fa fa-lock" aria-hidden="true"></span>
                                <div className="wthree-field">
                                    <input type="password" placeholder="Password" className="form-control"
                                           name="password"
                                           onChange={this.onChange} required/>

                                </div>
                            </div>
                            <ul className="list-login">

                                <li>
                                    <a href="#" className="text-right">forgot password?</a>

                                </li>
                                <li className="clearfix"></li>
                            </ul>
                            <div className="wthree-field">
                                <button id="loginForm" name="saveForm" disabled={!this.validateForm()} type="submit">
                                    {
                                        this.state.loading ? <LoadingSpinner/> : <div>Sign In</div>
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="copyright text-center">
                    <p>© 2018 Switch Login Form. All rights reserved | Design by
                        <a href="http://w3layouts.com">W3layouts</a>
                    </p>
                </div>
            </div>
        );


    }
}


export default Login;
import React, {Component} from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import PrivateRoute from '../common/PrivateRoute';

import indexRoutes from "routes/index.jsx";

import {getCurrentUser} from '../util/APIUtils';
import {ACCESS_TOKEN} from '../constants';
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';

import {Layout} from 'antd';

const {Content} = Layout;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            isAuthenticated: false,
            isLoading: false
        }
        this.handleLogout = this.handleLogout.bind(this);
        this.loadCurrentUser = this.loadCurrentUser.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    loadCurrentUser() {
        this.setState({
            isLoading: true
        });
        getCurrentUser()
            .then(response => {
                this.setState({
                    currentUser: response,
                    isAuthenticated: true,
                    isLoading: false
                });
            }).catch(error => {
            this.setState({
                isLoading: false
            });
        });
    }

    componentWillMount() {
        this.loadCurrentUser();
    }

    handleLogout(redirectTo = "/", notificationType = "success", description = "You're successfully logged out.") {
        localStorage.removeItem(ACCESS_TOKEN);

        this.setState({
            currentUser: null,
            isAuthenticated: false
        });
        this.props.history.push(redirectTo);
    }

    handleLogin() {

        this.loadCurrentUser();
        this.props.history.push("/dashboard");

    }

    render() {
        return (
            <div className="">
                <Switch>
                    <Route path="/login"
                           render={(props) => <Login onLogin={this.handleLogin} {...props} />}></Route>
                    <Route path="/signup" component={Signup}></Route>

                    {indexRoutes.map((prop, key) => {
                        return <PrivateRoute authenticated={this.state.isAuthenticated}
                                             isAuthenticated={this.state.isAuthenticated}
                                             currentUser={this.state.currentUser}
                                             to={prop.path} component={prop.component} key={key}
                                             handleLogout={this.handleLogout}/>;
                    })}
                </Switch>
            </div>

        );
    }
}

export default withRouter(App);

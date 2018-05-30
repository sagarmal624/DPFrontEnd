import React, {Component} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import NotificationSystem from "react-notification-system";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";

import {style} from "variables/Variables.jsx";

import dashboardRoutes from "routes/dashboard.jsx";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleNotificationClick = this.handleNotificationClick.bind(this);
        this.state = {
            _notificationSystem: null
        };
    }

    handleNotificationClick(position, level, message) {
        var color = Math.floor(Math.random() * 4 + 1);
        this.state._notificationSystem.addNotification({
            title: <span data-notify="icon" className="pe-7s-info"/>,
            message: (
                <div>
                    {message}
                </div>
            ),
            level: level,
            position: position,
            autoDismiss: 15
        });
    }

    componentDidMount() {
        this.setState({_notificationSystem: this.refs.notificationSystem});
    }

    componentDidUpdate(e) {
        if (
            window.innerWidth < 993 &&
            e.history.location.pathname !== e.location.pathname &&
            document.documentElement.className.indexOf("nav-open") !== -1
        ) {
            document.documentElement.classList.toggle("nav-open");
        }
        if (e.history.action === "PUSH") {
            document.documentElement.scrollTop = 0;
            document.scrollingElement.scrollTop = 0;
            this.refs.mainPanel.scrollTop = 0;
        }
    }

    render() {
        return (
            <div>
                <NotificationSystem ref="notificationSystem" style={style}/>
                <Sidebar {...this.props} />
                <div id="main-panel" className="main-panel" ref="mainPanel">
                    <Header {...this.props} />
                    <Switch>
                        {dashboardRoutes.map((prop, key) => {
                            if (prop.redirect)
                                return <Redirect from={prop.path} to={prop.to} key={key}/>;
                            return (
                                <Route path={prop.path} key={key}
                                       render={routeProps => (
                                           <prop.component
                                               {...routeProps}
                                               handleClick={this.handleNotificationClick}
                                           />
                                       )}
                                />
                            );
                        })}
                    </Switch>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Dashboard;

import React, {Component} from "react";
import {MenuItem, Nav, NavDropdown} from "react-bootstrap";

class HeaderLinks extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout = function () {
        this.props.handleLogout();
    };

    render() {
        const notification = (
            <div>
                <i className="fa fa-globe"/>
                <b className="caret"/>
                <span className="notification">5</span>
                <p className="hidden-lg hidden-md">Notification</p>
            </div>
        );
        return (
            <div>
                <Nav pullRight>
                    <NavDropdown
                        eventKey={1}
                        title={this.props.currentUser.name}
                        id="basic-nav-dropdown-right"
                    >
                        <MenuItem eventKey={1.1}>Profile</MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey={1.2} onClick={this.handleLogout}>Logout</MenuItem>
                    </NavDropdown>
                </Nav>
            </div>
        );
    }
}

export default HeaderLinks;

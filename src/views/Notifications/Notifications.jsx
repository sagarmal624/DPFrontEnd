import React, {Component} from "react";
import {Grid} from "react-bootstrap";

import Button from "components/CustomButton/CustomButton.jsx";

class Notifications extends Component {
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <div className="card">
                        <div className="header">
                            <h4 className="title">Notifications</h4>
                            <p className="category">
                                Handcrafted by{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://github.com/igorprado"
                                >
                                    Igor Prado
                                </a>. Please checkout the{" "}
                                <a
                                    href="http://igorprado.com/react-notification-system/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    full documentation.
                                </a>
                            </p>
                        </div>
                        <div className="content">
                            <Button
                                bsStyle="default"
                                block
                                onClick={() => this.props.handleClick("tc")}
                            >
                                Top Center
                            </Button>
                        </div>
                    </div>
                </Grid>
            </div>
        );
    }
}

export default Notifications;

import React, {Component} from "react";
import {Col, Grid, Row} from "react-bootstrap";

import {Card} from "components/Card/Card.jsx";
import {FormInputs} from "components/FormInputs/FormInputs.jsx";
import {UserCard} from "components/UserCard/UserCard.jsx";
import AddressList from "./AddressList";
import AddAddress from "./AddAddress";

class Address extends Component {

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <AddAddress handleClick={this.props.handleClick}/>
                            <AddressList/>
                        </Col>


                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Address;

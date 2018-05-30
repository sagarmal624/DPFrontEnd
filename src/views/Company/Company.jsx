import React, {Component} from "react";
import {Col, Grid, Row} from "react-bootstrap";

import {Card} from "components/Card/Card.jsx";
import {FormInputs} from "components/FormInputs/FormInputs.jsx";
import {UserCard} from "components/UserCard/UserCard.jsx";
import CompanyList from "./CompanyList";
import AddCompanyPopUp from "./AddCompanyPopUp";

class Company extends Component {

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <AddCompanyPopUp handleClick={this.props.handleClick}/>
                            <CompanyList/>
                        </Col>


                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Company;

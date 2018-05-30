import React, {Component} from "react";
import {Col, ControlLabel, FormControl, FormGroup, Grid, Row} from "react-bootstrap";

import {Card} from "components/Card/Card.jsx";
import {FormInputs} from "components/FormInputs/FormInputs.jsx";
import {UserCard} from "components/UserCard/UserCard.jsx";
import InvoiceDecisionMaker from "./InvoiceDecisionMaker";

class CreateInvoice extends Component {
    constructor() {
        super();
        this.state = {
            value: '-Select-'
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange = function (event) {
        console.log(event);
        this.setState({value: event.target.value});
    };

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Create Invoice"
                                content={
                                    <form>
                                        <FormGroup controlId="formControlsSelectMultiple">
                                            <ControlLabel>Invoice Type</ControlLabel>
                                            <FormControl componentClass="select" placeholder="Select Invoice"
                                                         onChange={this.onChange}>
                                                <option value="-Select-">-Select-</option>
                                                <option value="SALES">Sales</option>
                                                <option value="PURCHASE">Purchase</option>
                                            </FormControl>
                                        </FormGroup>

                                        <div className="clearfix"/>
                                    </form>
                                }
                            />
                        </Col>
                    </Row>
                    <InvoiceDecisionMaker value={this.state.value}/>

                </Grid>
            </div>
        );
    }
}

export default CreateInvoice;

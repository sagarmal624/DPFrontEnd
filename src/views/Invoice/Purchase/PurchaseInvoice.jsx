import React, {Component} from "react";
import {Col, ControlLabel, FormControl, FormGroup, Row} from "react-bootstrap";
import {FormInputs} from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import Card from "components/Card/Card.jsx";
import {tdArray, thArray} from "variables/Variables.jsx";

class PurchaseInvoice extends Component {
    render() {
        return (
            <Row>
                <Col md={12}>
                    <Card
                        title="Purchase Invoice"
                        content={
                            <form>

                                <FormInputs
                                    ncols={["col-md-4", "col-md-4"]}
                                    proprieties={[

                                        {
                                            label: "Bill No.",
                                            type: "text",
                                            bsClass: "form-control",
                                            placeholder: "Bill No"
                                        },
                                        {
                                            label: "Bill Date",
                                            type: "date",
                                            bsClass: "form-control date-time",
                                            placeholder: "Bill Date"
                                        }

                                    ]}
                                />
                                <FormGroup controlId="formControlsSelectMultiple">
                                    <ControlLabel>Company/Firm Name</ControlLabel>
                                    <FormControl componentClass="select" placeholder="Select Name">
                                        <option>-Select-</option>
                                        <option value="ADMIN">Sagar</option>
                                        <option value="GUEST">Mamta</option>
                                    </FormControl>
                                </FormGroup>

                                <FormInputs
                                    ncols={["col-md-2", "col-md-2", "col-md-4", "col-md-4"]}
                                    proprieties={[
                                        {
                                            label: "Amount",
                                            type: "text",
                                            bsClass: "form-control",
                                            placeholder: "Bill Amount"
                                        },
                                        {
                                            label: "GST",
                                            type: "text",
                                            bsClass: "form-control",
                                            placeholder: "GST"
                                        },
                                        {
                                            label: "Total Amount",
                                            type: "text",
                                            bsClass: "form-control",
                                            placeholder: "Total Amount"
                                        },
                                        {
                                            label: "Credit",
                                            type: "text",
                                            bsClass: "form-control",
                                            placeholder: "Credit"
                                        }
                                    ]}
                                />
                                <FormInputs
                                    ncols={["col-md-2", "col-md-2", "col-md-4"]}
                                    proprieties={[
                                        {
                                            label: "Due Amount",
                                            type: "text",
                                            bsClass: "form-control",
                                            placeholder: "Due Amount"
                                        },
                                        {
                                            label: "AdJustment",
                                            type: "text",
                                            bsClass: "form-control",
                                            placeholder: "Adjustment"
                                        },
                                        {
                                            label: "Bill Image",
                                            type: "file",
                                            bsClass: "form-control",
                                            placeholder: "Bill Image"
                                        },

                                    ]}
                                />

                                <Button bsStyle="success" pullRight fill type="submit">
                                    Save
                                </Button>
                                <Button bsStyle="danger" pullLeft fill type="button">
                                    Reset
                                </Button>

                                <div className="clearfix"/>
                            </form>
                        }
                    />

                </Col>

            </Row>
        );
    }
}

export default PurchaseInvoice;

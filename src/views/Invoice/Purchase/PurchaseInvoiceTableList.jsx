import React, {Component} from "react";
import {Col, Grid, Row, Table} from "react-bootstrap";
import {FormInputs} from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import Card from "components/Card/Card.jsx";
import {tdArray, thArray} from "variables/Variables.jsx";

class PurchaseInvoiceTableList extends Component {
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Search"
                                content={
                                    <form>
                                        <FormInputs
                                            ncols={["col-md-4", "col-md-4", "col-md-4"]}
                                            proprieties={[
                                                {
                                                    label: "Bill Date",
                                                    type: "date",
                                                    bsClass: "form-control date-time",
                                                    placeholder: "Bill Date"
                                                },
                                                {
                                                    label: "Bill No.",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Bill No"
                                                },
                                                {
                                                    label: "Amount",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Bill Amount"
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-4", "col-md-4", "col-md-4"]}
                                            proprieties={[
                                                {
                                                    label: "Name",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Customer Name"
                                                },
                                                {
                                                    label: "Mobile No",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Mobile Number"
                                                },
                                                {
                                                    label: "Amount",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Bill Amount"
                                                }
                                            ]}
                                        />

                                        <Button bsStyle="info" pullRight fill type="submit">
                                            Search..
                                        </Button>
                                        <Button bsStyle="danger" pullLeft fill type="button">
                                            Clear
                                        </Button>

                                        <div className="clearfix"/>
                                    </form>
                                }
                            />

                        </Col>
                        <Col md={12}>
                            <Card
                                title="Invoice List"
                                category="Purchase"
                                ctTableFullWidth
                                ctTableResponsive
                                content={
                                    <Table striped hover>
                                        <thead>
                                        <tr>
                                            {thArray.map((prop, key) => {
                                                return <th key={key}>{prop}</th>;
                                            })}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {tdArray.map((prop, key) => {
                                            return (
                                                <tr key={key}>
                                                    {prop.map((prop, key) => {
                                                        return <td key={key}>{prop}</td>;
                                                    })}
                                                </tr>
                                            );
                                        })}
                                        </tbody>
                                    </Table>
                                }
                            />
                        </Col>

                    </Row>
                </Grid>
            </div>
        );
    }
}

export default PurchaseInvoiceTableList;

import React, {Component} from "react";
import {Col, ControlLabel, FormControl, FormGroup, Row, Table} from "react-bootstrap";

import {FormInputs} from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import Card from "components/Card/Card.jsx";
import {tdArray, thArray} from "variables/Variables.jsx";

class CompanyList extends Component {
    render() {
        return (

            <Row>
                <Col md={12}>
                    <Card
                        title="Company or Firm Search"
                        content={
                            <form>

                                <FormInputs
                                    ncols={["col-md-4", "col-md-4", "col-md-4"]}
                                    proprieties={[
                                        {
                                            label: "Name",
                                            type: "text",
                                            bsClass: "form-control",
                                            placeholder: "Company Name"
                                        },
                                        {
                                            label: "Mobile No",
                                            type: "text",
                                            bsClass: "form-control",
                                            placeholder: "Mobile Number"
                                        },
                                        {
                                            label: "Email",
                                            type: "email",
                                            bsClass: "form-control",
                                            placeholder: "Email"
                                        }
                                    ]}
                                />
                                <FormGroup controlId="formControlsSelectMultiple">
                                    <ControlLabel>City</ControlLabel>
                                    <FormControl componentClass="select" placeholder="Select City">
                                        <option>-Select-</option>
                                        <option value="ADMIN">Jodhpur</option>
                                        <option value="GUEST">Beawar</option>
                                    </FormControl>
                                </FormGroup>

                                <Button bsStyle="info" pullRight fill type="submit">
                                    Search..
                                </Button>
                                <Button bsStyle="danger" pullLeft fill type="reset">
                                    Clear
                                </Button>

                                <div className="clearfix"/>
                            </form>
                        }
                    />
                </Col>
                <Col md={12}>
                    <Card
                        title="Company or Firm Search List"
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

        );
    }
}

export default CompanyList;

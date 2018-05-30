import React, {Component} from "react";
import {Col, ControlLabel, FormControl, FormGroup, Modal, Row} from "react-bootstrap";

import {Card} from "components/Card/Card.jsx";
import {FormInputs} from "components/FormInputs/FormInputs.jsx";
import {UserCard} from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import {ACTIONTYPE} from "variables/Variables.jsx";
import 'react-notifications/lib/notifications.css';
import {createCompany} from './CompanyAPIUtils'

class AddCompanyPopUp extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            name: "",
            email: "",
            mobile: "",
            "address.city": "",
            show: false
        };
    }

    onSubmit = function (event) {
        event.preventDefault();
        this.handleHide();
        const props = this.props;

        createCompany(this.state)
            .then(response => {
                props.handleClick("tc", "success", response.message);
            }).catch(error => {
            props.handleClick("tc", "error", "Something Went Wrong!. Please enter correct data");

        });
    };
    onChange = function (e) {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    };

    handleHide() {
        this.setState({show: false});
    }

    render() {
        const cityList = this.props.cityList.map((city) =>
            <option key={city} value={city}>{city}</option>
        );
        return (
            <Card
                content={

                    <div className="modal-container">
                        <Row>
                            <Col lg={3} sm={6}>

                                <a href="javascript:void(0)" className="btn-fill btn-success btn"
                                   onClick={() => this.setState({show: true})}
                                >
                                    <span class="glyphicon glyphicon-plus"></span>
                                </a>

                            </Col>
                            <Col lg={3} sm={6}>
                            </Col>
                            <Modal
                                show={this.state.show}
                                onHide={this.handleHide}
                                container={this}
                                aria-labelledby="contained-modal-title"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title">
                                        Create Company

                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    <Card
                                        title="Fill The Info"
                                        content={
                                            <form onSubmit={this.onSubmit}>
                                                <Col md={12}>
                                                    <FormGroup>
                                                        <ControlLabel>Company/Firm Name</ControlLabel>
                                                        <FormControl
                                                            type="text"
                                                            name="name"
                                                            value={this.state.name}
                                                            onChange={this.onChange}
                                                            placeholder="Company or Firm Name"

                                                        />
                                                    </FormGroup>
                                                </Col>

                                                <Col md={12}>
                                                    <Col md={6}>

                                                        <FormGroup>
                                                            <ControlLabel>Mobile No</ControlLabel>
                                                            <FormControl
                                                                type="number"
                                                                name="mobile"
                                                                value={this.state.mobile}
                                                                onChange={this.onChange}
                                                                placeholder="Mobile No"

                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md={6}>

                                                        <FormGroup>
                                                            <ControlLabel>Email</ControlLabel>
                                                            <FormControl
                                                                type="email"
                                                                name="email"
                                                                value={this.state.email}
                                                                onChange={this.onChange}
                                                                placeholder="Email"

                                                            />
                                                        </FormGroup>
                                                    </Col>

                                                </Col>
                                                <Col md={12}>

                                                    <FormGroup controlId="formControlsSelectMultiple">
                                                        <ControlLabel>City</ControlLabel>
                                                        <FormControl componentClass="select" name="address.city"
                                                                     placeholder="Select City" onChange={this.onChange}>
                                                            <option>-Select-</option>
                                                            {cityList}
                                                        </FormControl>
                                                    </FormGroup>
                                                </Col>
                                                <Button bsStyle="danger" pullLeft fill type="reset">
                                                    Reset
                                                </Button>
                                                <Button bsStyle="info" pullRight fill type="submit">
                                                    Save
                                                </Button>
                                                <div className="clearfix"/>

                                            </form>
                                        }
                                    /> </Modal.Body>
                            </Modal>
                        </Row>
                    </div>
                }
            />


        );
    }
}

AddCompanyPopUp.defaultProps = {
    cityList: ["Jaipur", "Jodhpur"],
    provinceList: [],
}
export default AddCompanyPopUp;
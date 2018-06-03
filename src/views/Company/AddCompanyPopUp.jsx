import React, {Component} from "react";
import {Col, ControlLabel, FormControl, FormGroup, Modal, Row} from "react-bootstrap";

import {Card} from "components/Card/Card.jsx";
import {FormInputs} from "components/FormInputs/FormInputs.jsx";
import {UserCard} from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import {ACTIONTYPE} from "variables/Variables.jsx";
import 'react-notifications/lib/notifications.css';
import {createCompany} from './CompanyAPIUtils'
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";

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
            show: false,
            errors: [],
            loading:false
        };
    }

    onSubmit = function (event) {
        event.preventDefault();
        this.handleHide();
        const props = this.props;
        const state = this.state;
        state['loading']=true;
        this.setState(state);
        createCompany(this.state)
            .then(response => {
                if (response.status)
                    props.handleClick("tc", "success", response.message);
                else {
                    state['errors'] = response.data;
                    state['loading']=false;
                    this.setState(state);
                }


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
                                                {this.state.errors.map((error) =>
                                                    <Col md={12}>
                                                        <div role="alert" className="alert alert-danger">
                                                            <button type="button" aria-hidden="true" className="close">✕
                                                            </button>
                                                            <span>{error}</span>
                                                        </div>
                                                    </Col>
                                                )}

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
                                                    {
                                                        this.state.loading ? <LoadingSpinner/> : <div>Save</div>
                                                    }

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
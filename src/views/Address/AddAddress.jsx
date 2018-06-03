import React, {Component} from "react";
import {Col, ControlLabel, FormControl, FormGroup, Row} from "react-bootstrap";

import {Card} from "components/Card/Card.jsx";
import {FormInputs} from "components/FormInputs/FormInputs.jsx";
import {UserCard} from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import {ACTIONTYPE} from "variables/Variables.jsx";
import 'react-notifications/lib/notifications.css';
import {createAddress} from './AddressAPIUtils'
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";

class AddAddress extends Component {
    constructor(props, context) {
        super(props, context);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            city: "",
            errors: [],
            loading: false
        };
    }

    onSubmit = function (event) {
        event.preventDefault();
        const props = this.props;
        const state = this.state;
        state['errors']=[];
        state['loading'] = true;
        this.setState(state);
        createAddress({city: this.state.city})
            .then(response => {
                if (response.status)
                    props.handleClick("tc", "success", response.message);
                else {
                    state['errors'] = response.data;
                }
                state['loading'] = false;
                this.setState(state);

            }).catch(error => {
            props.handleClick("tc", "error", "Something Went Wrong!. Please enter correct data");
        });

    };
    onChange = function (e) {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    };


    render() {
        return (
            <Card
                title="Create Address"
                content={

                    <div className="modal-container">
                        <Row>
                            <Col lg={3} sm={6}>

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
                                            <ControlLabel>City</ControlLabel>
                                            <FormControl
                                                type="text"
                                                name="city"
                                                value={this.state.city}
                                                onChange={this.onChange}
                                                placeholder="City Name"

                                            />
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

                            </Col>
                            <Col lg={3} sm={6}>
                            </Col>
                            = </Row>
                    </div>
                }
            />


        );
    }
}

export default AddAddress;
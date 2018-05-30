import React, {Component} from "react";
import {Col, Grid, Row} from "react-bootstrap";

import {Card} from "components/Card/Card.jsx";
import {StatsCard} from "components/StatsCard/StatsCard.jsx";
import {Tasks} from "components/Tasks/Tasks.jsx";
import {
    dataBar,
    dataPie,
    dataSales,
    legendBar,
    legendPie,
    legendSales,
    optionsBar,
    optionsSales,
    responsiveBar,
    responsiveSales
} from "variables/Variables.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

class Dashboard extends Component {
    componentDidUpdate(){
        this.props.handleClick("tc", "success", "You're successfully logged in.");
    };
    createLegend(json) {
        var legend = [];
        for (var i = 0; i < json["names"].length; i++) {
            var type = "fa fa-circle text-" + json["types"][i];
            legend.push(<i className={type} key={i}/>);
            legend.push(" ");
            legend.push(json["names"][i]);
        }
        return legend;
    }

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-server text-warning"/>}
                                statsText="Capacity"
                                statsValue="105GB"
                                statsIcon={<i className="fa fa-refresh"/>}
                                statsIconText="Updated now"
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-wallet text-success"/>}
                                statsText="Revenue"
                                statsValue="$1,345"
                                statsIcon={<i className="fa fa-calendar-o"/>}
                                statsIconText="Last day"
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-graph1 text-danger"/>}
                                statsText="Errors"
                                statsValue="23"
                                statsIcon={<i className="fa fa-clock-o"/>}
                                statsIconText="In the last hour"
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="fa fa-twitter text-info"/>}
                                statsText="Followers"
                                statsValue="+45"
                                statsIcon={<i className="fa fa-refresh"/>}
                                statsIconText="Updated now"
                            />
                            <Button
                                bsStyle="default"
                                block
                                onClick={() => this.props.handleClick("tc")}
                            >
                                Top Center
                            </Button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;

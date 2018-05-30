import React, {Component} from "react";
import {Button} from "react-bootstrap";
import cx from "classnames";
import PropTypes from "prop-types";

class CustomButton extends Component {
    render() {
        const {fill, simple, pullRight, pullLeft, round, block, ...rest} = this.props;

        const btnClasses = cx({
            "btn-fill": fill,
            "btn-simple": simple,
            "pull-right": pullRight,
            "pull-left": pullLeft,
            "btn-block": block,
            "btn-round": round
        });

        return <Button className={btnClasses} {...rest} />;
    }
}

CustomButton.propTypes = {
    fill: PropTypes.bool,
    simple: PropTypes.bool,
    pullRight: PropTypes.bool,
    pullLeft: PropTypes.bool,
    block: PropTypes.bool,
    round: PropTypes.bool
};

export default CustomButton;

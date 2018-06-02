import React, {Component} from "react";

class LoadingSpinner extends Component {
    render() {
        return (<div>
            <span style={{
                display: 'block', textAlign: 'center'
            }}>
            <i className="fa fa-spinner fa-spin"/> Loading...
                </span>
        </div>)
    }
}


export default LoadingSpinner;
import React, {Component} from "react";

import {Card} from "components/Card/Card.jsx";
import {FormInputs} from "components/FormInputs/FormInputs.jsx";
import {UserCard} from "components/UserCard/UserCard.jsx";
import PurchaseInvoice from "./Purchase/PurchaseInvoice";
import SaleInvoice from "./Sale/SaleInvoice";

class InvoiceDecisionMaker extends Component {


    render() {
        const value = this.props.value;
        if (value == "SALES")
            return (<SaleInvoice/>)
        else if (value == "PURCHASE")
            return (<PurchaseInvoice/>)
        else
            return (<div>Please select type</div>)
    }
}

export default InvoiceDecisionMaker;

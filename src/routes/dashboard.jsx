import Dashboard from "views/Dashboard/Dashboard";
import UserProfile from "views/UserProfile/UserProfile";
import PurchaseInvoiceList from "views/Invoice/Purchase/PurchaseInvoiceTableList";
import SaleInvoiceTableList from "views/Invoice/Sale/SaleInvoiceTableList";
import CreateInvoice from "views/Invoice/CreateInvoice";
import Company from "../views/Company/Company";
import Address from "../views/Address/Address";

const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "pe-7s-graph",
        component: Dashboard
    },
    {
        path: "/user",
        name: "User Profile",
        icon: "pe-7s-user",
        component: UserProfile
    },
    {
        path: "/invoice/create",
        name: "Create Invoice",
        icon: "pe-7s-user",
        component: CreateInvoice
    },
    {
        path: "/purchase/invoice/list",
        name: "Purchase Invoice List",
        icon: "pe-7s-note2",
        component: PurchaseInvoiceList
    },
    {
        path: "/sale/invoice/list",
        name: "Sale Invoice List",
        icon: "pe-7s-note2",
        component: SaleInvoiceTableList
    },
    {
        path: "/company/add",
        name: "Company/Firm",
        icon: "pe-7s-news-paper",
        component: Company
    },
    {
        path: "/address/add",
        name: "Address",
        icon: "pe-7s-news-paper",
        component: Address
    },

    {redirect: true, path: "/", to: "/dashboard", name: "Dashboard"}
];

export default dashboardRoutes;

import Dashboard from "views/Dashboard/Dashboard";
import UserProfile from "views/UserProfile/UserProfile";
import TableList from "views/TableList/TableList";
import PurchaseInvoiceList from "views/Invoice/Purchase/PurchaseInvoiceTableList";
import SaleInvoiceTableList from "views/Invoice/Sale/SaleInvoiceTableList";
import CreateInvoice from "views/Invoice/CreateInvoice";
import Notifications from "views/Notifications/Notifications";
import Company from "../views/Company/Company";

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
        path: "/table",
        name: "Table List",
        icon: "pe-7s-note2",
        component: TableList
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
        path: "/firm/add",
        name: "Company/Firm",
        icon: "pe-7s-news-paper",
        component: Company
    },
    {
        path: "/notifications",
        name: "Notifications",
        icon: "pe-7s-bell",
        component: Notifications
    },

    {redirect: true, path: "/", to: "/dashboard", name: "Dashboard"}
];

export default dashboardRoutes;

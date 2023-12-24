import React, { Fragment } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";


const PrivateLayout = ({ children }) => {
    return (
        <Fragment>
            <Header />
            <Sidebar />
            {children}
            <Footer />
        </Fragment>
    );
};

export default PrivateLayout;

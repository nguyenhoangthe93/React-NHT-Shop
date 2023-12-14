import React from "react";
import Navbar from "../components/Dashboard/Navbar/Navbar";
import Menu from "../components/Dashboard/Menu/Menu";

function DashboardLayout({ children }) {
    return (
        <div className="container">
            <Navbar />
            <div className="d-flex py-2">
                <div style={{ minWidth: '180px' }}>
                    <Menu />
                </div>
                <div className="flex-grow-1">
                    { children }
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;
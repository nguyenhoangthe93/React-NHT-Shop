import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Recommended from "../components/Recommended/Recommended";
import Products from "../components/Products/Products";
import MainLayout from "../layouts/MainLayout";

function ShopPage() {
    return (
        <MainLayout>
            <div className='container d-flex'>
                <div style={{ minWidth: "180px" }}>
                    <Sidebar />
                </div>
                <div className='flex-grow-1'>
                    <Recommended />
                    <Products />
                </div>
            </div>
        </MainLayout>
    )
}

export default ShopPage
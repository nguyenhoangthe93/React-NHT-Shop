import React from "react";
import { NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

function Menu() {
    return (
        <div className="">
            <h5>Menu</h5>
            <div className="d-flex flex-column">
                <NavLink to={'/dashboard/order-list'} className="menu d-flex align-items-center">
                    <FaCartArrowDown size={20} className="me-2"/> Order List
                </NavLink>
                <NavLink to={'/dashboard/product-list'} className="menu d-flex align-items-center">
                    <FaSitemap size={20} className="me-2"/> Products
                </NavLink>
            </div>
            
        </div>
    )
}

export default Menu;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderListThunkAction } from "../../../slices/orderSlice";
import { orderListSelector, orderLoadingSelector } from "../../../redux-toolkit/selectors";
import { MdReadMore } from "react-icons/md";
import dayjs from "dayjs";

function OrderList() {
    const [selectOrder, setSelectOrder] = useState(null)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchOrderListThunkAction())
    }, [])
    const orderList = useSelector(orderListSelector)
    const loading = useSelector(orderLoadingSelector)

    console.log(orderList);
    return (
        <div className="container">
            <div className="row">
                <div className={`${selectOrder ? 'col-md-7' : 'col-md-12'}`}>
                    <h5>Order Management</h5>
                    {
                        loading === 'loading' ? <p>Loading ...</p> : (
                            <table className="table table-striped order-table">
                                <thead>
                                    <tr>
                                        <th className="text-end align-middle">Order Date</th>
                                        <th className="text-end align-middle">Total Products</th>
                                        <th className="text-end align-middle">Subtotal</th>
                                        <th className="text-end align-middle">Shipping</th>
                                        <th className="text-end align-middle">Total Amount</th>
                                        <th className="text-end align-middle">Status</th>
                                        <th className="text-start align-middle">Customer Name</th>
                                        <th className="text-end align-middle">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orderList?.map((order) => (
                                            <tr key={order.orderId}>
                                                <td className="text-end align-middle">{dayjs(order.orderInfo.orderDate).format('MMM DD YYYY')}</td>
                                                <td className="text-end align-middle">
                                                    {order.orderDetails.length}
                                                </td>
                                                <td className="text-end align-middle">
                                                    ${order?.orderInfo?.subTotal}
                                                </td>
                                                <td className="text-end align-middle">
                                                    {`${order?.orderInfo?.shipping ? '$' + order?.orderInfo?.shipping : 'Free'}`}
                                                </td>
                                                <td className="text-end align-middle">
                                                    ${order?.orderInfo?.total}
                                                </td>
                                                <td className="text-end align-middle">
                                                    <span className="badge bg-secondary">{order?.orderInfo?.status}</span>
                                                </td>
                                                <td className="text-start align-middle">
                                                    {order?.customerInfo?.fullname}
                                                </td>
                                                <td className="text-end align-middle">
                                                    <MdReadMore size={20} color="green" role="button"
                                                        onClick={() => setSelectOrder(order)}
                                                    />
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        )
                    }
                </div>
                {
                    selectOrder &&
                    <div className="col-lg-5 border p-2 rounded">
                        <div className="d-flex align-items-center justify-content-between border-bottom">
                            <h5>Order details</h5>
                            <span role="button" className="btn-close" onClick={() => setSelectOrder(null)}></span>
                        </div>
                        <div className="my-2 border-bottom">
                            <h6>Order Information</h6>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Subtotal</span>
                                <span className="fw-bolder">${selectOrder?.orderInfo?.subTotal}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Shipping</span>
                                <span className="fw-bolder">
                                    {`${selectOrder?.orderInfo?.shipping ? '$' + selectOrder?.orderInfo?.shipping : 'Free'}`}
                                </span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Total</span>
                                <span className="fw-bolder">${selectOrder?.orderInfo?.total}</span>
                            </div>
                        </div>
                        <div className="my-2 border-bottom">
                            <h6>Customer Information</h6>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Fullname</span>
                                <span className="fw-bolder">{selectOrder?.customerInfo?.fullname}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Email</span>
                                <span className="fw-bolder">{selectOrder?.customerInfo?.email}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Mobile</span>
                                <span className="fw-bolder">{selectOrder?.customerInfo?.mobile}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Address</span>
                                <span className="fw-bolder">{selectOrder?.customerInfo?.address}</span>
                            </div>
                        </div>
                        <div className="my-2 border-bottom">
                            <h6>Order details</h6>
                            <table className="table table-striped">
                                <tbody>
                                    {
                                        selectOrder?.orderDetails?.map((orderItem) => (
                                            <tr key={orderItem.id}>
                                                <td style={{width: "250px"}}>
                                                    <div className="d-flex align-items-center">
                                                        <img style={{width: '50px'}} className="me-2" src={orderItem?.img}/>
                                                        {orderItem?.title}
                                                    </div>
                                                </td>
                                                <td className="text-end align-middle">{orderItem?.quantity}</td>
                                                <td className="text-end align-middle">${orderItem?.newPrice}</td>
                                                <td className="text-end align-middle fw-bolder">${orderItem?.amount}</td>

                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default OrderList;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import filtersSlice from "../../slices/filtersSlice";
import { priceSelector } from "../../redux-toolkit/selectors";

const prices = [
    {
        value: '0,0',
        name: "All"
    },
    {
        value: '0,500',
        name: "$0-$500"
    },
    {
        value: '500,1000',
        name: "$500-$1000"
    },
    {
        value: '1000,1500',
        name: "$1000-$1500"
    },
    {
        value: '1500,1500',
        name: "Over $1500"
    },

]
function Price() {
    const currenPrice = useSelector(priceSelector)
    const dispatch = useDispatch()
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Price</h5>
            <div className="form-group">
                {
                    prices.map((price,index) => (
                        <div key={price.value} className="form-check py-1">
                            <input className="form-check-input" type="radio" name="price"
                                id={`price_${index}`}
                                value={price.value}
                                defaultChecked={price.value === 'All'}
                                onChange={(e) => dispatch(filtersSlice.actions.setSearchPrice(e.target.value))}
                            />
                            <label 
                                role="button"
                                htmlFor={`price_${index}`}
                                className={`form-check-label ${price.value === currenPrice ? 'text-decoration-underline fw-bolder' : ''}`}
                            >
                                {price.name}
                            </label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Price;
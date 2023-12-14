import React from "react";
import { useDispatch, useSelector } from "react-redux";
import filtersSlice from "../../slices/filtersSlice";
import { recommendedSelector } from "../../redux-toolkit/selectors";

const recommendedList = [
    {
        value: 'All',
        name: 'All Products'
    },
    {
        value: 'Acer',
        name: 'Acer'
    },
    {
        value: 'Apple',
        name: 'Apple'
    },
    {
        value: 'Dell',
        name: 'Dell'
    },
    {
        value: 'SamSung',
        name: 'SamSung'
    }
]
function Recommended() {
    const recommended = useSelector(recommendedSelector)
    const dispatch = useDispatch()
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Recommended</h5>
            <div className="form-group">
                {
                    recommendedList.map(recmd => (
                        <button key={recmd.value}
                            className={
                                `btn btn-sm btn-outline-secondary me-1
                                    ${recmd.value === recommended ? 'active' : ''}
                                `
                            }
                            type="button"
                            onClick={() => dispatch(filtersSlice.actions.setSearchRecommended(recmd.value))}
                        >
                            {recmd.name}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default Recommended;
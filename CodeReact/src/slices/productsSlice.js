import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// createSlice({
//     name: '',
//     initialState: '',
//     reducers: '',
//     extraReducers: ''
// })

const productsSlice = createSlice({
    name: 'productList',
    initialState: {
        status: 'idle',
        products: [],
        product: {}
    },
    reducers: {
        // fetchProducts: (state, action) => {
        //     state = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductThunkAction.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchProductThunkAction.fulfilled, (state, action) => {
                state.status = 'idle'
                state.products = action.payload
            })
            .addCase(fetchProductByIdThunkAction.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchProductByIdThunkAction.fulfilled, (state, action) => {
                state.status = 'idle'
                state.product = action.payload
            })
    }
})

/*
    createAsyncThunk(type, payload) 
        => return thunk action 
            => status:
                1. pending
                2. fulfilled
                3. rejected
 */
export const fetchProductThunkAction = createAsyncThunk('productList/fetchProductThunkAction', async () => {
    let productListRes = await fetch('http://localhost:3000/products')
    let data = await productListRes.json()
    data = data.sort(function (item_1, item_2) {
        return Number(item_2.id) - Number(item_1.id)
    })
    return data;
})

export const fetchProductByIdThunkAction = createAsyncThunk(
    'productList/fetchProductByIdThunkAction',
    async (productId) => {
        let productRes = await fetch(`http://localhost:3000/products/${productId}`)
        let product = await productRes.json()
        return product;
    }
)

export default productsSlice;
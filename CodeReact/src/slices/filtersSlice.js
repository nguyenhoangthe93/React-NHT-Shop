import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        searchText: '',
        category: 'All',
        color: 'All',
        recommended: 'All',
        price: '0,0'
    },
    reducers: {
        /*
            - case -> update state
            - action creator => action with type format: name/actionCreatoer => 'filters/setSearchText'
        */
        setSearchText: (state, action) => {
            state.searchText = action.payload
            // IMMER
            // return {
            //     ...state,
            //     searchText: action.payload
            // }
        },
        setSearchRecommended: (state, action) => {
            state.recommended = action.payload
        },
        setSearchColor: (state, action) => {
            state.color = action.payload
        },
        setSearchCategory: (state, action) => {
            state.category = action.payload
        },
        setSearchPrice: (state, action) => {
            state.price = action.payload
        }
    }
})

export default filtersSlice

/*
    redux toolkit = pattern (khuôn mẫu)

    pure function = hàm tinh khiết

    function sum(a, b) {
        return a + b
    }
    sum(10, 20) => 30
    sum(10, 20) => 30

    function times(n){
        return Math.floor(Math.random() * (50 - 10) + 10) + n
    }
    times(10) => 
    times(10) => 

    function now() {
        return (new Date()).getSecond()
    }
    now() => 20
    now() => 21

    function fetchData(){
        return fetch(apiURL)
    }
    fetchData() => 
    fetchData() => 
    
    predicate = dự báo trước

    mutation: biến đổi/thay đổi
    immutation: bất biến/ không thay đổi


*/

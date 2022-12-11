import {createSlice} from "@reduxjs/toolkit";

// 1. To have initial data.
// initially there are no items in the cart.
const initialState ={
    value:[]
}

// 2. Create the reducer.
// use createSlice function.
const cartSlice = createSlice({
    name:"cartItems",
    initialState,
    reducers:{
        // define actions.
    }
});

export default cartSlice.reducer;
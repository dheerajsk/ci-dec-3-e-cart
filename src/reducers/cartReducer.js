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
        add:(state, action)=>{
            console.log(action.payload);
            console.log("Action add being performed");
            state.value.push(action.payload);
        }
    }
});

// exporting actions for components to call.
export const {add} = cartSlice.actions;

// selector to select cart data.
export const cartSelector = (state)=> state.cartItems.value;

export default cartSlice.reducer;
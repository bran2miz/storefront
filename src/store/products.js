import { createSlice } from "@reduxjs/toolkit";
import productData from "../data.json";

const productSlice = createSlice({
    // name of the slice
    name: "products",
    initialState: {
        // left is the name of the key and the right is the value
        productData: productData.products,
        selectedProduct: undefined,
        // numOfHorns: "all"
    },
    // like dispatch and action and useReducer (when you dispatch it calls the function and then does an action)
    // when we define reducers, it creates "actions" (showBeast)
    reducers: {
        // key: name of action we want to dispatch (right), left is the state or action that occurs 
        showProduct: (state, action) => {
            // when action occurs we do this:
            state.selectedProduct = action.payload;
        },
        setCategory: (state, action) => {
            state.setCategory = action.payload
        }
    }
});

export default productSlice;
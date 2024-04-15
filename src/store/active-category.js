import { createSlice } from "@reduxjs/toolkit";
import categoryData from "../data.json";

const categorySlice = createSlice({
    // name of the slice
    name: "category",
    initialState: {
        // left is the name of the key and the right is the value
        categoryData,
        acitveCategory: null
    },
    // like dispatch and action and useReducer (when you dispatch it calls the function and then does an action)
    // when we define reducers, it creates "actions" (showBeast)
    reducers: {
        // key: name of action we want to dispatch (right), left is the state or action that occurs 
        setActiveCategory: (state, action) => {
            state.acitveCategory = action.payload
        }
    }
});

export default categorySlice;
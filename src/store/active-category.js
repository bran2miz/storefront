import { createSlice } from "@reduxjs/toolkit";
import categoryData from "../data.json";

const categorySlice = createSlice({
    // name of the slice
    name: "categories",
    initialState: {
        // left is the name of the key and the right is the value
        categories:categoryData,
        activeCategory: null
    },
    // like dispatch and action and useReducer (when you dispatch it calls the function and then does an action)
    // when we define reducers, it creates "actions" (showBeast)
    reducers: {
        // key: name of action we want to dispatch (right), left is the state or action that occurs 
        setActiveCategory: (state, action) => {
            console.log(action.payload)
            state.activeCategory = action.payload
        }
    }
});

export default categorySlice;
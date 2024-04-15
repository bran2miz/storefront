import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products";
import categorySlice from "./active-category";

export const store = configureStore({
    // reducer defines the slices of our store
    reducer: {
        products: productSlice.reducer,
        category: categorySlice.reducer,
    },
});
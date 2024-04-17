import { createSlice } from "@reduxjs/toolkit";
import productData from "../data.json";

const productSlice = createSlice({
    // name of the slice
    name: "products",
    initialState: {
        // left is the name of the key and the right is the value
        productData: productData.products,
        selectedProduct: undefined,
        selectedCategory: undefined,
        unavailable: false
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
        },
        // reduceQuantity: (state, action) => {
        //     // action.payload will replace the undefined selectedProduct in state from undefined to the object once clicked. 
        //     state.selectedProduct = action.payload;
        //     // if there isn't anything in the payload, state that it is unavailable.
        //     if (state.selectedProduct === 0) {
        //         state.unavailable = true;
        //     //otherwise
        //     } else {
        //     // map through the data.json and at each product if the name in the .json matches the object.name that is coming in, reduce the stock quantity by 1. 
        //         const newProducts = state.productData.map(product => {
        //                 if(product.name === action.payload.name) {
        //                     product.inStock -=1;
        //                 }
        //                 return product;
        //         })
        //     console.log("newProducts", newProducts)
        //     state.productData = newProducts;
        //     state.selectedProduct = {...state.selectedProduct, inStock: state.selectedProduct.inStock -=1}
        //     }
        // }
        reduceQuantity: (state, action) => {
            const updatedProducts = state.productData.map(product => {
                if (product.name === action.payload.name) {
                    return { ...product, inStock: product.inStock - 1 };
                }
                return product;
            });
        
            state.productData = updatedProducts;
            const selectedProductIndex = updatedProducts.findIndex(product => product.name === action.payload.name);
            if (selectedProductIndex !== -1) {
                state.selectedProduct = updatedProducts[selectedProductIndex];
                if (state.selectedProduct.inStock === 0) {
                    state.unavailable = true;
                }
            }
        }        
    }
});

export default productSlice;
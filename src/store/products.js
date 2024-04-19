import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productData from "../data.json";

const url = import.meta.env.VITE_API_URL


// takes in a title and an async function
// this sets up a function taht will run asynchronously and return something
export const getProducts = createAsyncThunk("GET/products", async () => {
    //this is a set timeout because it doesn't automatically happen below (commented out)
    // it is a placeholder for making an async request (mocking an await call that will await a request to an api) that will resolve after two seconds and return an array of data
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    // return [{name: "dummy product"}];

    // ^^^ demo only

    const response = await fetch(`${url}/products`);
    const json = await response.json();
    return json.results;

});

//update a single product 

export const updateProduct = createAsyncThunk("PUT/products/:id", async ({ product, amount }) => {
    // id is the id of the product I want to update.
    const updatedProduct = { ...product, inStock: product.inStock + amount };

    // must stringify the object for it to fetch that data
    const response = await fetch(`${url}/products/${product._id}`, {
        method: "PUT", body: JSON.stringify(updatedProduct), headers: { "Content-Type": "application/json" },
    })
    console.log(response)
    // I expect to get back from a response after jsoning it I will get the updated response back.
    const json = await response.json();
    return json;
})

const productSlice = createSlice({
    // name of the slice
    name: "products",
    initialState: {
        // left is the name of the key and the right is the value
        productData:[],
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
    },
    // new property after reducers (extraReducers) that will take in a function
    // will act as a switch case and listens for that async function to be run. Wait for a function to be run. 
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and hold loading state as needed
        //when the promise comes back, promise pending promise will be fulfilled => when promise is fulfilled, do the behavior after the comma
        builder.addCase(getProducts.fulfilled, (state, action) => {
            console.log(action.payload);
            state.productData = action.payload
        })
        .addCase(updateProduct.fulfilled, (state, action) => {
            console.log(action.payload);
            const updatedProduct = action.payload;

            const index = state.productData.findIndex(p => p._id === updatedProduct._id);
            console.log(index);
            state.productData[index] = updatedProduct;
        })
    },
});

export default productSlice;
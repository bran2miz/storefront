import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = import.meta.env.VITE_API_URL
// use this to create a ID for each item
let nextCartItemId = 1;

export const deleteItemInCart = createAsyncThunk("DELETE/product/:id", async({product})=> {
    const deletedProduct = {...product};
    const response = await fetch(`${url}/products/${product._id}`, {
        method:'DELETE',
        body: JSON.stringify(deletedProduct),
        headers: {'Content-Type': 'application/json'},
    });
    const json = await response.json();
    return json;
})

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        cart: [],
        selectedProduct: undefined,
        cartItems: 0,
        viewCart: false,
        totalAmount: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = {
                ...action.payload,
                cartItemId: nextCartItemId++  // Assign a unique ID to each item
            };
            state.cart.push(newItem);
            state.cartItems += 1;
            state.totalAmount += newItem.price;
        },
        viewCart: (state, action) => {
            state.viewCart = action.payload;
        },
        deleteItemInCart: (state, action) => {
            const itemId = action.payload.cartItemId;
            // when you try to delete an item from the cart, you will then pass in the selectedProduct, which will pass into this function. you will then filter from the cart and at each item, you will see if that cartItemId matches the id from which you selected. 
            const initialLength = state.cart.length;
            state.cart = state.cart.filter(item => item.cartItemId !== itemId);
            if (state.cart.length <initialLength) {
                state.cartItems -=1;
            }
        },
    },
});

export default cartSlice;
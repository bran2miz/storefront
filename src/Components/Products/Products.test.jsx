// import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Product from './product';
import productSlice from '../../store/products'; 
import cartSlice from '../../store/cart';

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer
  },
  preloadedState: {
    products: {
        products: [
            {"name": "Monopoly", "category": "games", "inStock": 0, "price": 1000},
{"name": "Smash Bros", "category": "games", "inStock": -1, "price": 1000},  
{"name": "Knife", "category": 'weapons', "inStock": 2, "price": 10},
     
          ],
    },
    cart: { // Ensure the cart initial state is defined if required
        cart: [],
        selectedProduct: undefined,
        cartItems: 0,
        viewCart: false,
        totalAmount: 0
      }
  },
});
test("Product component contains the Card element with product details", () => {
    const product = {"name": "Monopoly", "category": "games", "inStock": 0, "price": 1000};
  
    render(
      <Provider store={store}>
        <Product product={product} />
      </Provider>
    );
  
    const cardElement = screen.getByTestId('product-card');
    expect(cardElement).toBeInTheDocument();
  
    const productName = screen.getByText(product.name);
    const productPrice = screen.getByText(`${product.price}`);
    expect(productName).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
  });
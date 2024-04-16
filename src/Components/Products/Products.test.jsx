// import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Product from './product';
import productSlice from '../../store/products'; 

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
  preloadedState: {
    products: {
        "products": [
            { "name": "TV", "category": "electronics", "price": 699.00, "inStock": 5 },
            { "name": "Radio", "category": "electronics", "price": 99.00, "inStock": 15 },
            { "name": "Shirt", "category": "clothing", "price": 9.00, "inStock": 25 },
            { "name": "Socks", "category": "clothing", "price": 12.00, "inStock": 10 },
            { "name": "Apples", "category": "food", "price": 0.99, "inStock": 500 },
            { "name": "Eggs", "category": "food", "price": 1.99, "inStock": 12 },
            { "name": "Bread", "category": "food", "price": 2.39, "inStock": 90 }
          ],
    },
  },
});
test("Product component contains the Card element with product details", () => {
    const product = { name: "TV", category: "electronics", price: 699.00, inStock: 5 };
  
    render(
      <Provider store={store}>
        <Product product={product} />
      </Provider>
    );
  
    const cardElement = screen.getByTestId('product-card');
    expect(cardElement).toBeInTheDocument();
  
    const productName = screen.getByText(product.name);
    const productPrice = screen.getByText(product.price);
    expect(productName).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
  });
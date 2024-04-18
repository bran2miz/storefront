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
            { "name": "TV", "category": "electronics", "price": 699.00, "inStock": 5, "image_url": "https://images.unsplash.com/photo-1574974409771-cebec54deb00?auto=format&fit=crop&q=80&w=1673&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
      { "name": "Radios", "category": "electronics", "price": 99.00, "inStock": 15, "image_url": "https://images.unsplash.com/photo-1612869544295-eda1013274aa?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
      { "name": "Cameras", "category": "electronics", "price": 150.00, "inStock": 20, "image_url": "https://images.unsplash.com/26/camera-keys.jpg?auto=format&fit=crop&q=80&w=1752&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
      { "name": "Shirts", "category": "clothing", "price": 9.00, "inStock": 25, "image_url": "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&q=80&w=1674&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { "name": "Socks", "category": "clothing", "price": 12.00, "inStock": 10, "image_url": "https://plus.unsplash.com/premium_photo-1664297793769-b1f4ceb6d823?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { "name": "Hats", "category": "clothing", "price": 10.00, "inStock": 40, "image_url": "https://images.unsplash.com/photo-1503120221448-20a77f3c6fa7?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { "name": "Apples", "category": "food", "price": 0.99, "inStock": 500, "image_url": "https://images.unsplash.com/photo-1603189863725-8a495917803e?auto=format&fit=crop&q=80&w=1674&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { "name": "Eggs", "category": "food", "price": 1.99, "inStock": 12, "image_url": "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?auto=format&fit=crop&q=80&w=1742&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
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
    const product = { name: "TV", category: "electronics", price: 699.00, inStock: 5, image_url:"https://images.unsplash.com/photo-1574974409771-cebec54deb00?auto=format&fit=crop&q=80&w=1673&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" };
  
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
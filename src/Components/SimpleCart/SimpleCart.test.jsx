/* eslint-disable no-undef */
// import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import CartModal from './modal';
import cartSlice from '../../store/cart';
import SimpleCart from '.';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  },
  preloadedState: {
    cart: {
        cart: [
            { name: "Apples", price: 0.99, cartItemId: 1, inStock: 500, image_url: "https://example.com/apples.jpg" },
            { name: "Oranges", price: 1.29, cartItemId: 2, inStock: 300, image_url: "https://example.com/oranges.jpg" }

        ],
        selectedProduct: undefined,
        cartItems: 2,
        viewCart: true,
        totalAmount: 2.28
      }
  },
});

describe('SimpleCart Component', () => {
    test('displays the number of items in the cart', () => {
        render(
            <Provider store={store}>
                <SimpleCart />
            </Provider>
        );
        expect(screen.getByText('(2)')).toBeInTheDocument();
    });

    test('opens cart modal on button click', () => {
        render(
            <Provider store={store}>
                <SimpleCart />
            </Provider>
        );
        const button = screen.getByRole('button');
        fireEvent.click(button);
    })
});

describe('CartModal Component', ()=> {
    test('deletes an item from the cart', () => {
        render(
            <Provider store={store}>
                <CartModal />
            </Provider>
        );

        const initialTotalItems = screen.getAllByRole('listitem').length;
        // Initially two items in the cart
        expect(initialTotalItems).toBe(2);

        // Trigger delete on the first item
        const deleteButtons = screen.getAllByText('X');
        fireEvent.click(deleteButtons[0]);
        
        // After clicking delete, check the number of items in the cart
        const updateTotalItems = screen.getAllByRole('listitem').length;
        // One item should be left
        expect(updateTotalItems).toBe(1);
    })
})
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Categories from './index'; // Adjust the path to your Categories component as needed
import categorySlice from '../../store/active-category'; // Adjust the path to your Redux slice

// Setup a mock store with the necessary state
const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
  },
  preloadedState: {
    category: {
      categories: [
        { name: "Monopoly", category: "games", price: "1000" },
        { name: "Smash Bros", category: "games", price: "1000" },
        { name: "Pizza", category: "food", description: "1.99" }
      ],
      activeCategory: 'All'
    },
  },
});

test("Categories component contains the FormControl element", () => {
  render(
    <Provider store={store}>
      <Categories />
    </Provider>
  );

  // Using the getByRole to select the combobox element from the Select component inside the FormControl
  const formControlElement = screen.getByRole('combobox');
  expect(formControlElement).toBeInTheDocument();
});

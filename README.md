# storeFront

## Brandon Mizutani

### Version 1.0.0

## Overview

This project is an e-Commerce storefront built with React and Redux, integrated with a live API server. The storefront allows users to browse products, add items to a shopping cart, and checkout.

## Getting Started

### Installation

To get started with the storefront application, clone the repository to your local machine and install the dependencies.

bash
git clone https://github.com/bran2miz/storefront.git
cd storefront
npm install

### Configuration
Before running the application, make sure to set up your environment variables in a .env file as per the Vite documentation. Example:

Copy code
VITE_API_URL=https://api-js401.herokuapp.com/api/v1

Running the application
To run the application in development mode:

`npm run dev`

### Usage
Navigate through the application to:

View a list of product categories.
Select a category to see the available products.
Add products to the shopping cart.
View and manage the shopping cart contents.
Proceed to checkout and simulate a purchase.


### Features

Material UI for a visually appealing user interface.
Redux Store for state management across categories and products.
Dynamic category selection which updates the product list.
Shopping cart functionality, including add to cart and remove from cart.
Checkout page with form submission for billing and shipping information.
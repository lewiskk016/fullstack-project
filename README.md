# Aveson: An Amazon clone e-commerce website

Aveson is a full stack e-commerce clone of the popular website Amazon. It is designed to allow users to search and shop for bird products. Users can add items to their cart and checkout. Users can also leave reviews on products and view other users' reviews.

## Technologies Used
 Aveson is built with the following technologies:
    * React
    * Redux
    * Node.js
    * Rails
    * PostgreSQL
    * AWS S3

## Features
    * User authentication
    * Product search
    * Product reviews
    * Shopping cart
    * Checkout

## Product Search
    * Users can search for products by name or category
    * Users can sort products by price or rating
    * Users can filter products by category

## Product Reviews
    * Users can leave reviews on products
    * Users can view other users' reviews

## Shopping Cart
    * Users can add items to their cart
    * Users can remove items from their cart
    * Users can update the quantity of items in their cart

## Checkout
    * Users can checkout their cart
    * Users can view their order history

## Challenges
    * Implementing the shopping cart
    * Implementing the checkout
    * Implementing the search bar

## Future Features


## Installation
    * Clone the repository
    * Run npm install
    * Run npm start
    * Navigate to localhost:3000

## Links
    * [Live Site](https://aveson2.onrender.com)
    * [Github](https://github.com/lewiskk016/fullstack-project)
    * [LinkedIn](https://www.linkedin.com/)

## Code Snippets
    * Shopping Cart
    * Checkout
    * Search Bar

## Shopping Cart
    * The shopping cart was implemented using Redux. The cart slice of state contains an object with the product id as the key and the quantity as the value. The cart component uses the cart slice of state to render the items in the cart. The cart component also uses the cart slice of state to calculate the total price of the items in the cart.


## Checkout
    * The checkout was implemented using a Rails backend. The checkout page makes a post request to the Rails backend to create an order. The Rails backend then creates an order and creates order items for each item in the cart. The Rails backend then sends the order back to the frontend. The frontend then redirects the user to the order confirmation page.

## Search Bar
    * The search bar was implemented using a Rails backend. The search bar makes a get request to the Rails backend to search for products. The Rails backend then queries the database for products that match the search query. The Rails backend then sends the products back to the frontend. The frontend then renders the products.

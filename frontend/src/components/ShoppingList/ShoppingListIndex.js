
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchShoppingCart } from "../../store/shoppinglist";
import { deleteShoppingListItem } from "../../store/shoppinglist";
import { useHistory } from "react-router-dom";


const ShoppingListIndex = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const shoppingList = useSelector((state) => Object.values(state.shoppingList));
    const items = useSelector((state) => state.items);
    const shoppingListItems = useSelector((state) => state.shoppingList);


    useEffect(() => {
      dispatch(fetchShoppingCart());
    }, [dispatch]);



    const totalPrice = (shoppingListItems) => {
      let total = 0;
      Object.entries(shoppingListItems).forEach(([itemId, quantity]) => {
        const item = items[itemId];
        if (item) {
          const price = item.price;
          total += price * quantity;
        }
      });
      return total;
    };


const total = totalPrice(shoppingListItems);

  const handleDelete = (itemId) => {
    dispatch(deleteShoppingListItem(itemId));
  };


  return (
    <div className="shopping-list-container">
      <div className="shopping-list-header">
        <br/>
        <br />
        <br />
        <br />
        <br />
        <h1 className="shopping-list-title">Shopping List</h1>
        <h2 className="shopping-list-subtitle">Price</h2>
        <div>Total Quantity: </div>
      </div>

      <div className="shopping-list-footer-left-title">
      Subtotal ({Object.keys(shoppingListItems).length - 1} items):
      </div>
      <div className="shopping-list-footer-left-price">${total.toFixed(2)}</div>



      <div className="shopping-list-footer">
        <div className="shopping-list-footer-left">
          <h2 className="shopping-list-footer-left-title">
            Subtotal ( {totalPrice} ):
          </h2>
          <h2 className="shopping-list-footer-left-price">$</h2>
        </div>
        <div className="shopping-list-footer-right">


        {/* <button
            className="shopping-list-footer-right-button"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ShoppingListIndex;

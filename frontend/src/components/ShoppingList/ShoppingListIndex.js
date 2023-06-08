
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchShoppingCart } from "../../store/shoppinglist";
import { updateShoppingCart, deleteShoppingListItem } from "../../store/shoppinglist";
import { useHistory } from "react-router-dom";
import {
  retrieveShoppingListItem,
  updateShoppingListItem,
  removeShoppingListItem
} from '../../store/shoppinglist';
import './ShoppingListIndex.css'


const ShoppingListIndex = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const shoppingList = useSelector((state) => Object.values(state.shoppingList));
    const items = useSelector((state) => state.items);
    const shoppingListItems = useSelector((state) => state.shoppingList);
    // const userId = useSelector((state) => state.session.user?.id);


    console.log(shoppingListItems)



    // useEffect(() => {
    //   dispatch(fetchShoppingCart());
    // }, [dispatch]);



    // const totalPrice = (shoppingListItems) => {
    //   let total = 0;
    //   Object.entries(shoppingListItems).forEach(([itemId, quantity]) => {
    //     let item = items[itemId];
    //     if (item) {
    //       const price = item.price;
    //       total += price * quantity;
    //     }
    //   });
    //   return total;
    // };

    const totalPrice = (shoppingListItems) => {
      let total = 0;
      Object.entries(shoppingListItems).forEach(([itemId, quantity]) => {
        let item = items[itemId];
        if (item) {
          const price = item.price;
          total += price * quantity;
        }
      });
      return total;
    };

    const total = totalPrice(shoppingListItems);



    const handleUpdate = async (itemId, quantity) => {
      await dispatch(updateShoppingCart(itemId, quantity));
  };


  const handleDelete = async (itemId) => {
    await dispatch(deleteShoppingListItem(itemId));
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

      <div className="shopping-list-body">
        {Object.values(items).map((item) => (
          <div key={item.itemId} className="shopping-list-item">
            <div className="shopping-list-item-left">
              {/* <div className="shopping-list-item-left-image">
                <img src={item.image} alt={item.name} />
              </div> */}
              <div className="shopping-list-item-left-info">
                <div className="shopping-list-item-left-info-name">
                  {item.name}
                </div>
                <div className="shopping-list-item-left-info-price">
                  ${item.price}
                </div>
                <div className="shopping-list-item-left-info-quantity">
                  Quantity: {item.quantity}
                </div>
              </div>
            </div>
            <div className="shopping-list-item-right">
              <input

                type="number"
                value={item.quantity}
                onChange={(e) => handleUpdate(item.itemId, e.target.value)}
              />
              <button onClick={() => handleDelete(item.itemId)}>Delete</button>
            </div>
          </div>
        ))}
      </div>




      <div className="item-list">


      {/* {Object.values(shoppingListItems).map((item) => (
        <div key={item.itemId}>
        <p>Item ID: {item.itemId}</p>
        <p>Quantity: {item.quantity}</p>
        {items[item.itemId] && (
            <div>
            <p>Name: {items[item.itemId].name}</p>
            <p>Price: {items[item.itemId].price}</p>
          </div>
        )}
    <input
      type="number"
      value={item.quantity}
      onChange={(e) => handleUpdate(item.itemId, e.target.value)}
    />
    <button onClick={() => handleDelete(item.itemId)}>Delete</button>
  </div>
))} */}

    </div>

      <div className="shopping-list-footer-left-title">
      Subtotal ({Object.keys(shoppingListItems).length} items):
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
        </div>
      </div>



    </div>
  );
};

export default ShoppingListIndex;









      {/* {Object.values(shoppingListItems).map((item) => (
        <div className="item-list-item" key={item.id}>
          <div className="item-list-item-left">
            <div className="item-list-item-left-image">
              <span className="name">{item.name}</span>
              <span className="price">${item.price}</span>
              <select className="quantity" onChange={(e) => handleUpdate(e, item.id)}>
                <option value={item.quantity}>{item.quantity}</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={0}>Remove</option>
              </select>
            </div>
          </div>
        </div>
      ))} */}

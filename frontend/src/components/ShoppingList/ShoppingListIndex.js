import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShoppingCart, updateShoppingCart, updateShoppingList, deleteShoppingListItem } from "../../store/shoppinglist";
import { useHistory } from "react-router-dom";
import './ShoppingListIndex.css';
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { logout } from "../../store/session";
import { deleteShoppingList } from '../../store/shoppinglist';


const ShoppingListIndex = () => {
  const shoppingListItem = useSelector((state) => state.shoppingList);
  // const userId = useSelector((state) => state.session.user.id);
  const userId = useSelector((state) => state.session.user?.id);

  const dispatch = useDispatch();
  const history = useHistory();
  const shoppingList = useSelector((state) => Object.values(state.shoppingList));
  const products = useSelector((state) => state.shoppingList.products);
  const items = useSelector((state) => state.items);
  const shoppingListItems = useSelector((state) => state.shoppingList);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(true);
  const [showEditButton, setShowEditButton] = useState(true);
  const sessionUser = useSelector((state) => state.session.user);
  const [showModal, setShowModal] = useState(false);



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

  const newTotal = totalPrice(shoppingListItems);
  console.log(shoppingListItems);


  const handleDelete = (userId, itemId) => {
    dispatch(deleteShoppingListItem(userId, itemId))
  };

 const handleUpdate = (userId, itemId, e) => {
  const newQuantity = parseInt(e.target.value);
  dispatch(updateShoppingList(userId, itemId, newQuantity));
  if (newQuantity === 0) {
    dispatch(deleteShoppingListItem(userId, itemId))
  }
};

const handleLogout = () => {
  dispatch(logout())
    .then(() => {
      history.push('/'); // Redirect to splash page after logout
    })
    .catch((err) => {
      console.error(err);
    });
};

const handleCheckout = () => {
  const itemIds = Object.keys(shoppingListItems);
  itemIds.forEach(itemId => {
    dispatch(deleteShoppingListItem(userId, itemId))
  });
  setShowModal(true);
};

const handleCloseModal = () => {
  setShowModal(false);
  history.push('/');
};

if (!sessionUser || sessionUser === null) {
  return <div>Loading...</div>; // or any other fallback UI when sessionUser is null
}

  return (
    <div className="entire-window">
      <div className="leftcolumn-checkout">
        <span className="bbop-title">Shopping Cart</span>
        <span className="priceholder">Price</span>
        <hr></hr>
        <br />
        <div className="shoppingcart-list">
        {Object.entries(shoppingListItems).map(([itemId, quantity]) => {
          let item = items[itemId];
          if (item) {
          return (
            <div key={itemId} className="item-entry">
                <Link to={`/items/${itemId}`}>
                  <img src={item.photoUrl} alt={item.name} className="cart-image" />
                </Link>
                <p className='cartItemname'><b>Name: </b>
                {item.name}</p>
                <p className='cartItemquantity'><b>Quantity:</b> <span className="itemquantity">{quantity} </span></p>
                <p className='cartItemprice'><b> $ {item.price}</b></p>
                <hr></hr>
                <br />
                <button className="delete-button" onClick={(e) => handleDelete(userId, itemId)}>Delete</button>
                <select
                className="cart-item-quantity"
                value={item.quantity}
                onChange={(e) => handleUpdate(userId, itemId, e)}
              >
                <option value={1}>Qty: 1</option>
                <option value={2}>Qty: 2</option>
                <option value={3}>Qty: 3</option>
                <option value={4}>Qty: 4</option>
                <option value={5}>Qty: 5</option>
                <option value={6}>Qty: 6</option>
                <option value={7}>Qty: 7</option>
                <option value={8}>Qty: 8</option>
                <option value={9}>Qty: 9</option>
                <option value={10}>Qty: 10</option>
              </select>

            </div>
          );
        }
      })}
      </div>
      </div>

      <div className="shopping-list-header">
        <div id="rightcolumn2" className="rightcolumn2">
          <div id="prime" className="prime">
            <div id="content-container" className="content-container">
              <span className="bbop-content">
                <b>Enjoy fast, FREE delivery, exclusive deals and award-winning Bird Products with Flyme</b>
                <br />
                <span className="bbop-content">
                  Try Flyme free for 30 days
                  <br />
                </span>
                and start saving today with
                <br />
                <b>Fast, FREE Delivery</b>
              </span>
            </div>
          </div>
          <div id="buybox" className="buybox">
            <div id="price" className="price">
              <span className="priceblock_ourprice1">
                <b>Subtotal ({Object.keys(shoppingListItems).length} items):</b>
              </span>
              <br />
              <span className="priceblock_ourpricee">${newTotal.toFixed(2)}</span>
              <br />
              <br />
              <span className="pricemessage">
                Get
                <b>Fast, Free Shipping</b>
                with
                <b>Flyme</b>
                <br />
              </span>
              <br />
              <span className="deliverymessage1">FREE delivery </span>
              <span className="deliverymessage">
                <b>Monday, June 12</b>
              </span>
              <br />
              on orders over $25.00 shipped by Flyme.
              <br />
              <br />
              <button className="checkout-button" onClick={handleCheckout}>Purchase</button>
              {showModal && (
                 <div className="modal">
                <div className="modal-content">
                <h3>Thank you for shopping!</h3>
                <button onClick={handleCloseModal}>Close</button>
               </div>
                </div>
                )}
            </div>
          </div>
        </div>


      </div>


      </div>
  );
};

export default ShoppingListIndex;

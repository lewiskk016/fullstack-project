import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShoppingCart, updateShoppingCart, deleteShoppingListItem } from "../../store/shoppinglist";
import { useHistory } from "react-router-dom";
import './ShoppingListIndex.css';

const ShoppingListIndex = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const shoppingList = useSelector((state) => Object.values(state.shoppingList));
  const products = useSelector((state) => state.shoppingList.products);
  const items = useSelector((state) => state.items);
  const shoppingListItems = useSelector((state) => state.shoppingList);

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

  return (



    <div className="leftcolumn">
    <div className="shopping-list-container">
      {Object.entries(shoppingListItems).map(([itemId, quantity]) => {
        let item = items[itemId];
        if (item) {
          return (
            <div key={itemId}>
              <div>
                <p>Name: {item.name}</p>
                <p>Price: {item.price}</p>
              </div>
            </div>
          );
        }
      })}
      </div>

      <div className="shopping-list-header">
        <h1 className="shopping-list-title">Shopping List</h1>

        <div id="rightcolumn" className="rightcolumn">
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
              <span className="priceblock_ourprice">${newTotal}</span>
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
              <button type="submit" className="add-to-cart-button">
                Purchase
              </button>
            </div>
          </div>
        </div>

        <div>Total Quantity: </div>
      </div>

      <div className="item-list"></div>

      <div className="shopping-list-footer-left-title">
        Subtotal ({Object.keys(shoppingListItems).length} items):
      </div>
      <div className="shopping-list-footer-left-price">${newTotal.toFixed(2)}</div>

      <div className="shopping-list-footer">
        <div className="shopping-list-footer-left">
          <h2 className="shopping-list-footer-left-title">Subtotal ($ {newTotal.toFixed(2)}):</h2>
          <h2 className="shopping-list-footer-left-price"></h2>
        </div>
        <div className="shopping-list-footer-right"></div>
      </div>
    </div>
  );
};

export default ShoppingListIndex;













































// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {fetchShoppingCart } from "../../store/shoppinglist";
// import { updateShoppingCart, deleteShoppingListItem } from "../../store/shoppinglist";
// import { useHistory } from "react-router-dom";
// import {
//   retrieveShoppingListItem,
//   updateShoppingListItem,
//   removeShoppingListItem
// } from '../../store/shoppinglist';
// import './ShoppingListIndex.css'


// const ShoppingListIndex = () => {
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const shoppingList = useSelector((state) => Object.values(state.shoppingList));
//     const products = useSelector((state) => state.shoppingList.products);
//     const items = useSelector((state) => state.items);
//     const shoppingListItems = useSelector((state) => state.shoppingList);
//     // const userId = useSelector((state) => state.session.user?.id);


//             const totalPrice = (shoppingListItems) => {
//               let total = 0;
//               Object.entries(shoppingListItems).forEach(([itemId, quantity]) => {
//                 let item = items[itemId];
//                 if (item) {
//                   const price = item.price;
//                   total += price * quantity;
//                 }
//               });
//               return total;
//             };

//             const newTotal = totalPrice(shoppingListItems);
//           console.log(shoppingListItems)

//           return (

//             <div className="shopping-list-container">

//           {Object.entries(shoppingListItems).map([itemId, quantity]) => (
//             <div key={itemId}>
//               let item = items[itemId];
//               if (item) {
//                 <div>
//                 <p>Name: {items[item.itemId].name}</p>
//                 <p>Price: {items[item.itemId].price}</p>
//                 </div>
//               }
//               </div>

//   );

//       <div className="shopping-list-header">
//         <h1 className="shopping-list-title">Shopping List</h1>
//         {/* <h2 className="shopping-list-subtitle">Price</h2> */}

//         <div id="rightcolumn" className="rightcolumn">
//                 <div id="prime" className="prime">
//                     <div id="content-container" className="content-container">
//                         <span className="bbop-content">
//                             <b> Enjoy fast, FREE delivery, exclusive deals and award-winning Bird Products with Flyme </b>
//                             <br />
//                             <span className="bbop-content">
//                                 Try Flyme free for 30 days
//                                 <br />
//                             </span>
//                                 and start saving today with
//                                 <br/>
//                             <b> Fast, FREE Delivery</b>

//                         </span>
//                     </div>
//                 </div>
//                 <div id="buybox" className="buybox">
//                     <div id="price" className="price">
//                         <span className="priceblock_ourprice1"> <b>Subtotal ({Object.keys(shoppingListItems).length} items):</b></span>
//                         <br />
//                         <span className="priceblock_ourprice">${newTotal}</span>
//                         <br />
//                         <br />
//                         <span className="pricemessage">
//                             Get
//                             <b> Fast, Free Shipping </b>
//                              with
//                             <b> Flyme </b>
//                             <br />
//                         </span>
//                         <br/>
//                         <span className="deliverymessage1">FREE delivery </span>
//                         <span className="deliverymessage"> <b>Monday, June 12</b> </span>
//                         <br/>
//                          on orders over $25.00 shipped by Flyme.
//                         <br/>
//                         <br/>
//                <button type="submit" className="add-to-cart-button">Purchase</button>
//               {/* </form> */}
//                     </div>
//                 </div>
//             </div>


//         <div>Total Quantity: </div>
//       </div>

//       <div className="item-list">
//     </div>

//       <div className="shopping-list-footer-left-title">
//       Subtotal ({Object.keys(shoppingListItems).length} items):
//       </div>
//       <div className="shopping-list-footer-left-price">${newTotal.toFixed(2)}</div>

//       <div className="shopping-list-footer">
//         <div className="shopping-list-footer-left">
//           <h2 className="shopping-list-footer-left-title">
//             Subtotal ( $ {newTotal.toFixed(2)} ):
//           </h2>
//           <h2 className="shopping-list-footer-left-price"></h2>
//         </div>
//         <div className="shopping-list-footer-right">
//         </div>
//       </div>

//     </div>
//   );
// };

// export default ShoppingListIndex;























{/* useEffect(() => {
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



{/* <div className="shopping-list-body">

{Object.keys(items).forEach(([itemId]) => {
  let item = items[itemId];
  if (itemId) {
  return (
    <div key={item.itemId} className="shopping-list-item">
    <div className="shopping-list-item-left-info">
        <div className="shopping-list-item-left-info-name">
            {itemId.name}
        </div>
        <div className="shopping-list-item-left-info-price">
            ${itemId.price}
        </div>
        <div className="shopping-list-item-left-info-quantity">
            Quantity: {itemId.quantity}
        </div>
        </div>
        </div>
        );
}
})}

</div> */}







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





  {/* <div className="shopping-list-item-right">
              <input

                type="number"
                value={shoppingListItems.quantity}
                onChange={(e) => handleUpdate(shoppingListItems.itemId, e.target.value)}
              />
              <button onClick={() => handleDelete(shoppingListItems.itemId)}>Delete</button>
            </div> */}











        //     <input
        //   type="number"
        //   value={item.quantity}
        //   onChange={(e) => handleUpdate(item.itemId, e.target.value)}
        // />
        // <button onClick={() => handleDelete(item.itemId)}>Delete</button>









 {/* const handleUpdate = async (itemId, quantity) => {
          await dispatch(updateShoppingCart(itemId, quantity));



      const handleDelete = async (itemId) => {
         await dispatch(deleteShoppingListItem(itemId));
         }; */}

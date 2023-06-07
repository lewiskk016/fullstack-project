import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { fetchShoppingCart} from "../../store/shoppinglist";
// import shoppingListItem from "./ShoppingListItem";
import {shoppingListItems} from "../../store/shoppinglist";
import { deleteShoppingListItem } from "../../store/shoppinglist";
// import { ItemShow } from "../ItemShow";


const ShoppingListIndex = () => {
    debugger
    const dispatch = useDispatch();
    const history = useHistory();
    const cartItems = useSelector((state) => state.cartItems);
    const items = useSelector((state) => Object.values(state.items));
    const sessionUser = useSelector((state) => state.session.user);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [checkoutSuccess, setCheckoutSuccess] = useState(false);
    // const [totalItems, setTotalItems] = useState(0);
    // const [totalItemsPrice, setTotalItemsPrice] = useState(0);

    console.log(cartItems)
    useEffect(() => {
        debugger
        console.log(cartItems)
        dispatch(fetchShoppingCart());
    }, [dispatch]);


    // useEffect(() => {
    //     let quantity = 0;
    //     let subTotal = 0;

    //     cartItems.forEach(cartItem => {
    //         if (cartItem && items[cartItem.itemId]) {
    //                 const item = items[cartItem.itemId];
    //                 const itemQuantity = cartItem.quantity;
    //                 const itemPrice = item.price;
    //                 quantity += itemQuantity;
    //                 subTotal += itemQuantity * itemPrice;
    //         debugger
    //             }
    //         });
    //         setTotalQuantity(quantity);
    //         setTotalPrice(subTotal);
    //     }, [cartItems, items]);

        const checkoutHandler = (e) => {
            e.preventDefault();
            if (totalPrice > 0) {
                cartItems.forEach(cartItem => {
                    if (cartItem)
                    dispatch(deleteShoppingListItem(cartItem.id));
                });
                setCheckoutSuccess(true);
            }
        };

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteShoppingListItem(e.target.value));
    }

    const handleCheckout = (e) => {
        e.preventDefault();
        if (!sessionUser) {
            history.push(`/login`);
        } else {
            history.push(`/checkout`);
        }
    };

    return (
        <div className="shopping-list-container">
            <div className="shopping-list-header">
                <h1 className="shopping-list-title">Shopping List</h1>
                <h2 className="shopping-list-subtitle">Price</h2>
                <div>Total Quantity: {totalQuantity}</div>
                <div>Subtotal: ${totalPrice}</div>
            </div>
            {/* <div className="shopping-list-items-container">
                {items && Object.values(items).map((item) => (
                    <ShoppingListItem key={item.id} item={item} handleDelete={handleDelete} />
                ))}
            </div> */}
            <div className="shopping-list-footer">
                <div className="shopping-list-footer-left">
                    <h2 className="shopping-list-footer-left-title">Subtotal ({totalQuantity} items):</h2>
                    <h2 className="shopping-list-footer-left-price">${totalPrice}</h2>
                </div>
                <div className="shopping-list-footer-right">
                    <button className="shopping-list-footer-right-button" onClick={handleCheckout}>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingListIndex;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { fetchAllShoppingListItems } from "../../store/shoppinglist";
// import ShoppingListItem from "./ShoppingListItem";
import { deleteShoppingListItem } from "../../store/shoppinglist";
// import { ItemShow } from "../ItemShow";

const ShoppingListIndex = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const items = useSelector((state) => state.items);
    const sessionUser = useSelector((state) => state.session.user);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [totalItemsPrice, setTotalItemsPrice] = useState(0);

    useEffect(() => {
        dispatch(fetchAllShoppingListItems());
    }, [dispatch]);

    useEffect(() => {
        let total = 0;
        let quantity = 0;
        let itemsCount = 0;
        let itemsPrice = 0;

        if (items) {
        Object.values(items).forEach((item) => {
            total += item.price * item.quantity;
            quantity += item.quantity;
            itemsCount += 1;
            itemsPrice += item.price;
        });
    }
        setTotalPrice(total);
        setTotalQuantity(quantity);
        setTotalItems(itemsCount);
        setTotalItemsPrice(itemsPrice);
    }, [items]);

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
    }

    return (
        <div className="shopping-list-container">
            <div className="shopping-list-header">
                <h1 className="shopping-list-title">Shopping List</h1>
                <h2 className="shopping-list-subtitle">Price</h2>
            </div>
            <div className="shopping-list-items-container">
                {/* {items && Object.values(items).map((item) => (
                    <ShoppingListItem key={item.id} item={item} handleDelete={handleDelete} />
                ))} */}
            </div>
            <div className="shopping-list-footer">
                <div className="shopping-list-footer-left">
                    <h2 className="shopping-list-footer-left-title">Subtotal ({totalItems} items):</h2>
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

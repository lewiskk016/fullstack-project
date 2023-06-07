import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { fetchShoppingCart} from "../../store/shoppinglist";
// import ShoppingListItem from "./ShoppingListItem";
import { deleteShoppingListItem } from "../../store/shoppinglist";
// import { ItemShow } from "../ItemShow";

const ShoppingListIndex = () => {
    debugger
    const dispatch = useDispatch();
    const history = useHistory();
    const items = useSelector((state) => state.items);
    const sessionUser = useSelector((state) => state.session.user);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(1);
    // const [totalItems, setTotalItems] = useState(0);
    // const [totalItemsPrice, setTotalItemsPrice] = useState(0);

    useEffect(() => {
        debugger
        dispatch(fetchShoppingCart());
    }, [dispatch]);

    useEffect(() => {
        debugger
        // let total = 0;
        let quantity = 1;
        // let itemsCount = 0;
        let price = 0;
        debugger
        Object.values(items).forEach((item) => {
            // quantity += shoppingLists.quantity;
            debugger
            price += item.price * item.quantity;
            debugger
        });
          setTotalPrice(price);
            setTotalQuantity(quantity);
            debugger
    }, [items]);

        //     total += item.price * itemsCount;
            // quantity += item.quantity; // nothing
        //     itemsCount += 1;
        //     itemsPrice += item.price;
        // });
    // }
    //     setTotalPrice(total);
    //     setTotalQuantity(quantity);
    //     // setTotalItems(itemsCount);
    //     // setTotalItemsPrice(itemsPrice);
    // }, [items]);

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
            </div>
            <div className="shopping-list-items-container">
                {/* {items && Object.values(items).map((item) => (
                    <ShoppingListItem key={item.id} item={item} handleDelete={handleDelete} />
                ))} */}
            </div>
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

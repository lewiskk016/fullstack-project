import { useDispatch, useSelector } from "react-redux";
import {getItem} from "../../store/item";
import { useEffect, useState } from "react";
import { updateShoppingListItem, deleteShoppingListItem } from "../../store/shoppinglist";

const ShoppingListItem = ({ shoppingListItem }) => {
    const item = useSelector(getItem(shoppingListItem.itemId));
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(shoppingListItem.quantity);
    const [showEditForm, setShowEditForm] = useState(false);
    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [showDeleteButton, setShowDeleteButton] = useState(true);
    const [showEditButton, setShowEditButton] = useState(true);

    const sessionUser = useSelector((state) => state.session.user);

    if (!item) {
        return null;
    }

    const handleEdit = (e) => {
        e.preventDefault();
        const payload = {
            id: shoppingListItem.id,
            quantity,
        };
        dispatch(updateShoppingListItem(payload));
        setShowEditForm(false);
        setShowDeleteButton(true);
        setShowEditButton(true);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteShoppingListItem(shoppingListItem.id));
        setShowDeleteForm(false);
        setShowDeleteButton(true);
        setShowEditButton(true);
    }

    // useEffect(() => {
    //     if (sessionUser) {
    //             setShowDeleteButton(false);
    //             setShowEditButton(false);
    //         }}, [sessionUser])


    // useEffect(() => {
    //     setShowDeleteButton(true);
    //     setShowEditButton(true);
    // }, [sessionUser])


    return (
        <div className="shopping-list-item-container">
            <div className="shopping-list-item">
                <div className="shopping-list-item-image">
                    {/* <img className="shopping-list-item-image" src={shoppingListItem.photoUrl} alt="" /> */}
                </div>
                <div className="shopping-list-item-info">
                    <div className="shopping-list-item-name">{shoppingListItem.name}</div>
                    <div className="shopping-list-item-price">{shoppingListItem.price}</div>
                    <div className="shopping-list-item-quantity">Quantity: {shoppingListItem.quantity}</div>
                    <div className="shopping-list-item-total-price">Total Price: {shoppingListItem.price * shoppingListItem.quantity}</div>
                </div>
                <div className="shopping-list-item-buttons">
                    {showEditButton && (
                        <button className="shopping-list-item-edit-button" onClick={() => setShowEditForm(true)}>Edit</button>
                    )}
                    {showDeleteButton && (
                        <button className="shopping-list-item-delete-button" onClick={() => setShowDeleteForm(true)}>Delete</button>
                    )}
                </div>
            </div>
            {showEditForm && (
                <form onSubmit={handleEdit} className="shopping-list-item-edit-form">
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                    />
                    <button type="submit">Update</button>
                </form>
            )}
            {showDeleteForm && (
                <form onSubmit={handleDelete} className="shopping-list-item-delete-form">
                    <button type="submit">Delete</button>
                </form>
            )}
        </div>
    )
}

// export default ShoppingListItem;

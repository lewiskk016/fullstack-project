import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateShoppingListItem, deleteShoppingListItem } from "../../store/shoppinglist";

const ShoppingListItem = ({ shoppingListItem }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(shoppingListItem.quantity);
    const [showEditForm, setShowEditForm] = useState(false);
    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [showDeleteButton, setShowDeleteButton] = useState(true);
    const [showEditButton, setShowEditButton] = useState(true);

    const sessionUser = useSelector((state) => state.session.user);

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

    useEffect(() => {
        if (sessionUser) {
            if (sessionUser.id !== shoppingListItem.user_id) {
                setShowDeleteButton(false);
                setShowEditButton(false);
            }
        }
    }

    )

    return (
        <div className="shopping-list-item-container">
            <div className="shopping-list-item">
                <div className="shopping-list-item-image">
                    <img className="shopping-list-item-image" src={shoppingListItem.item.photoUrl} alt="" />
                </div>
                <div className="shopping-list-item-info">
                    <div className="shopping-list-item-name">{shoppingListItem.item.name}</div>
                    <div className="shopping-list-item-price">{shoppingListItem.item.price}</div>
                    <div className="shopping-list-item-quantity">Quantity: {shoppingListItem.quantity}</div>
                    <div className="shopping-list-item-total-price">Total Price: {shoppingListItem.item.price * shoppingListItem.quantity}</div>
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

export default ShoppingListItem;

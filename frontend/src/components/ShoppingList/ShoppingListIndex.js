import { getItem } from '../../store/item';
import { useDispatch, useSelector } from 'react-redux';
import { updateShoppingListItem, deleteShoppingListItem   } from '../../store/shoppinglist';
import { useState } from 'react';
import './ShoppingListIndex.css'
import { useHistory } from 'react-router-dom';


const ShoppingListIndexItem = ({cartItem}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const item = useSelector(getItem(cartItem.itemId));

    const [itemQuantity, setItemQuantity] = useState(cartItem.itemQuantity);

    // if (!item) {
    //     return null;
    // }


    // const handleupdateShoppingList = (e) => {
    //     const shoppingListId = cartItem.id
    //     const userId = sessionUser.id
    //     const itemId = item.id
    //     const itemQuantity = parseInt(e.currentTarget.value)
    //     const userOrder = {shoppingListId, userId, itemId, itemQuantity}
    //     setItemQuantity(e.target.value)
    //     dispatch(updateShoppingListItem(userOrder));
    // }

    const handleupdateShoppingList = (e) => {
        const shoppingListItemId = cartItem.id;
        const shoppingListItem = {
            id: shoppingListItemId,
            user_id: sessionUser.id,
            item_id: item.id,
            quantity: parseInt(e.currentTarget.value)
        };

        setItemQuantity(e.target.value);
        dispatch(updateShoppingListItem(shoppingListItem));
    };

    const handleRemoveFromShoppingList = (e) => {
        e.preventDefault()
        // if (!sessionUser){history.push(`/login`)
        // } else {
            dispatch(deleteShoppingListItem(cartItem.id));
        }

    return (
        <div className="shopping-list-container" key={cartItem.id}>
            <a id="shopping-list-item-name" href={`/items/${item.id}`}>{item.name}</a>
            <div className="shopping-list-item-price">{item.price}</div>
            <div className="shopping-list-item-quantity">
                <select name="itemQuantity" className="quantity-selector" form="add-to-shopping-list" onChange={handleupdateShoppingList} value={itemQuantity}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3" >3</option>
                    <option value="4" >4</option>
                    <option value="5" >5</option>
                    <option value="6" >6</option>
                    <option value="7" >7</option>
                    <option value="8" >8</option>
                    <option value="9" >9</option>
                    <option value="10" >10</option>
                </select>
                <span className="shopping-list-item-remove" onClick={handleRemoveFromShoppingList}>Remove</span>
        </div>
        </div>
    )

}
export default ShoppingListIndexItem;

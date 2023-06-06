import {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchItem} from '../../store/item';
import './ItemsShow.css';
import { useHistory } from 'react-router-dom';
import { createShoppingListItem } from '../../store/shoppinglist';

// debugger
const ItemShow = () => {
    const { itemId } = useParams();
    const dispatch = useDispatch();
    const item = useSelector(state => state.items[itemId]);
    const [itemQuantity, setItemQuantity] = useState(1)
    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory()


    useEffect(() => {
        console.log("Dispatching fetchItem");
        dispatch(fetchItem(itemId));
    }, [dispatch, itemId]);

    if (!item) {
        return null;
    }

    const handleAddToShoppingList = (e) => {
        e.preventDefault();
        if (!sessionUser) {
          history.push(`/login`);
        } else {
          const userId = sessionUser.id;
          const userOrder = {
            quantity: itemQuantity, // Use 'quantity' instead of 'itemQuantity'
            user_id: userId, // Use 'user_id' instead of 'userId'
            item_id: itemId, // Use 'item_id' instead of 'itemId'
          };
          dispatch(createShoppingListItem({ shopping_list: userOrder })); // Include 'shopping_list' key in the payload
          history.push(`/shopping_lists`);
        }
      };

    const updateSelector = (e) => {
        setItemQuantity(parseInt(e.currentTarget.value))
    }


// debugger
    return (
        <div className="item-show-container">
            <div className="image">
                <img className="item-image" src={item.photoUrl} alt=""/>
            </div>
            <div className="item-container">
                <h3 className="name">{item.name}</h3>
                <div className="rating-container">
                    <h3 className="ratings-stars">Stars</h3>
                    <h3 className="ratings-count">Reviews Count</h3>
                </div>
                <div className="item-price">{item.price}
                    <h3 className="free-returns">Free Returns</h3>
                    <h3 className="free-delivery">Free Delivery</h3>
                    <h3 className="in-stock">In Stock</h3>
                </div>
                <h3 className="item-description">{item.description}</h3>

                <form onSubmit={handleAddToShoppingList} className="add-to-shopping-list">
                    <div className="quantity-container">
                        <h3 className="quantity-count">Quantity</h3>
                        <select name="itemQuantity" className="quantity-selector" form="add-to-shopping-list" onChange={updateSelector}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div className="add-to-shopping-list">
                    <button type="submit" className="add-to-shopping-list">Add to Cart</button>
                    </div>
                </form>
            </div>


            <div className="reviews-container">
                <div className="user-reviews">
                    <h3>Reviews</h3>
                    <h3>Leave a Review</h3>
                </div>
            </div>
            {/* {item && (
                <div className="item">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                </div>
            )} */}
        </div>
    )
}

export default ItemShow;

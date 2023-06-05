import {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchItem, getItem } from '../../store/item';
import './ItemsShow.css';
import { useHistory } from 'react-router-dom';

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
        e.preventDefault()
        if (!sessionUser){history.push(`/login`)
        } else {
            const userId = sessionUser.id
            // const userOrder = {itemQuantity, userId, itemId}
            // dispatch(createShoppingListItem(userOrder));
            // history.pushState(`/shoppinglist`)
        }
    }

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
            </div>

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
                    <button type="submit" className="add-to-shopping-list">Add to Cart</button>
                </form>


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

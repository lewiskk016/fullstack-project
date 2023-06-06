import {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchItem} from '../../store/item';
import './ItemsShow.css';
import { useHistory } from 'react-router-dom';
import { createShoppingListItem } from '../../store/shoppinglist';

const ItemShow = () => {
    const { itemId } = useParams();
    const dispatch = useDispatch();
    const item = useSelector(state => state.items[itemId]);
    const [itemQuantity, setItemQuantity] = useState(1)
    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory()


    useEffect(() => {
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
            quantity: itemQuantity,
            user_id: userId,
            item_id: itemId,
          };
          dispatch(createShoppingListItem({ shopping_list: userOrder }));
          history.push('/shopping_lists');
        }
      };

    const updateSelector = (e) => {
        setItemQuantity(parseInt(e.currentTarget.value))
    }

    return (
        <div className="item-show-container">
          <div className="column">
            <div className="image">
              <img className="item-image" src={item.photoUrl} alt="" />
            </div>
          </div>
          <div className="column">
            <div className="item-container">
              <h3 className="name">{item.name}</h3>
              <div className="rating-container">
                <h3 className="ratings-stars">Stars</h3>
                <h3 className="ratings-count">Reviews Count</h3>
              </div>
              <h3 className="item-description">{item.description}</h3>
            </div>
          </div>
          <div className="column">
            <div className="checkout-container">
              <div className="item-price">{item.price}</div>
              <h3 className="free-returns">Free Returns</h3>
              <h3 className="free-delivery">Free Delivery</h3>
              <h3 className="in-stock">In Stock</h3>
              <form onSubmit={handleAddToShoppingList} className="add-to-shopping-list">
                <div className="quantity-container">
                  <h3 className="quantity-count">Quantity</h3>
                  <select
                    name="itemQuantity"
                    className="quantity-selector"
                    form="add-to-shopping-list"
                    onChange={updateSelector}
                  >
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
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                  </select>
                </div>
                <button type="submit" className="add-to-cart-button">Add to Cart</button>
              </form>
            </div>
          </div>
        </div>
      );

}

export default ItemShow;

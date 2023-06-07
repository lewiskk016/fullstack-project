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
    const [reviewRating , setReviewRating] = useState(0)
    const userId = useSelector(state => state.session.user?.id)


    useEffect(() => {
        debugger
        dispatch(fetchItem(itemId));
    }, [dispatch, itemId]);



    const handleAddToShoppingList = (e) => {
        e.preventDefault();
        if (!sessionUser) {
          history.push(`/login`);
        } else {
        //   const userId = sessionUser.id;
        //   const userOrder = {
        //     user_id: userId,
        //     item_id: itemId,
        //     quantity: itemQuantity
        //   };
          debugger
          dispatch(createShoppingListItem(userId, itemId, itemQuantity))
        //   {
        //     shopping_list: userOrder }));
            history.push('/shopping_lists');
        }
      };

      if (!item) {
        return null;
    }

    const updateSelector = (e) => {
        debugger
        setItemQuantity(parseInt(e.currentTarget.value))
        debugger
    }

    const handleRatingClick = (rating) => {
        setReviewRating(rating);
      };

    return (
        <div id="item-show-container" className="item-show-container">
            <div id="rightcolumn" className="rightcolumn">
                <div id="prime" className="prime">
                    <div id="content-container" className="content-container">
                        <span className="bbop-content">
                            <b> Enjoy fast, FREE delivery, exclusive deals and award-winning Bird Products with Flyme </b>
                            <br />
                            <span className="bbop-content">
                                Try Flyme free for 30 days
                                <br />
                            </span>
                                and start saving today with
                                <br/>
                            <b> Fast, FREE Delivery</b>

                        </span>
                    </div>
                </div>
                <div id="buybox" className="buybox">
                    <div id="price" className="price">
                        <span className="priceblock_ourprice1"> <b>One-time purchase:</b></span>
                        <br />
                        <span className="priceblock_ourprice">${item.price}</span>
                        <br />
                        <br />
                        <span className="pricemessage">
                            Get
                            <b> Fast, Free Shipping </b>
                             with
                            <b> Flyme </b>
                            <br />
                        </span>
                        <br/>
                        <span className="deliverymessage1">FREE delivery </span>
                        <span className="deliverymessage"> <b>Monday, June 12</b> </span>
                        <br/>
                         on orders over $25.00 shipped by Flyme.
                        <br/>
                        <br/>
                        <span className="instock"><b>In Stock</b></span>
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
            <div id="leftcolumn" className="leftcolumn">
                <div id="image" className="image">
                    <img id="item-image" className="item-image" src={item.photoUrl} alt="" />
                </div>
            </div>
            <div id="middlecolumn" className="middlecolumn">
                <div id="name" className="name">
                    <h3 className="name">{item.name}</h3>
                    <hr></hr>
                </div>
                    <span className="ourprice">Price:
                    <span className="priceblock_ourprice"> {item.price}</span> </span>
                    <br />
                    <br />
                    <span className="pricemessage">
                        Get
                        <b> Fast, Free Shipping </b>
                            with
                        <b> Flyme </b>
                    <br />
                    </span>
                    <br />
                    <br />
                    <hr></hr>
                    <br />
                    <span className="aboutitem">
                        About this item:
                    </span>
                    <br />
                    <br />
                    <span className="description">
                        {item.description}
                    </span>
                    <br />
                    <br />
                    <br />
                    <hr></hr>

                    <div className="reviews-container">
                        <h3 className="reviews">Customer Ratings</h3>
                        <br />
                        <br />
                    <div className="rating-stars">
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <span
                                key={rating}
                                className={`star ${rating <= reviewRating ? 'filled' : ''}`}
                                onClick={() => handleRatingClick(rating)}
                                >
                                ★
                            </span>
                        ))}
                    </div>
                    <br />
                    <br />
                    </div>
            </div>
        </div>
    )

}

export default ItemShow;

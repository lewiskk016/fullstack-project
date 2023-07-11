import {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchItem} from '../../store/item';
import './ItemsShow.css';
import { useHistory } from 'react-router-dom';
import { createShoppingListItem, fetchShoppingCart  } from '../../store/shoppinglist';
import CreateReviews from '../Reviews/CreateReview';
import { fetchReview, RETRIEVE_REVIEWS } from '../../store/reviews';
import { retrieveReview } from '../../store/reviews';
import { updateReview, deleteReview } from '../../store/reviews';
import EditReviews from '../Reviews/UpdateReview';
import '../Reviews/UpdateReview.css'
import '../Reviews/CreateReview.css'


const ItemShow = () => {
    const { itemId } = useParams();
    const dispatch = useDispatch();
    const item = useSelector(state => state.items[itemId]);
    const [itemQuantity, setItemQuantity] = useState(1)
    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory()
    const [reviewRating , setReviewRating] = useState(0)
    const userId = useSelector(state => state.session.user?.id)
    const [reviewRatings, setReviewRatings] = useState([0, 0, 0]);
    const reviews = useSelector(state => Object.values(state.reviews))
    const [reviewTitle, setReviewTitle] = useState('');
    const [reviewBody, setReviewBody] = useState('');



    const handleRatingClick = (row, rating) => {
    const updatedRatings = [...reviewRatings];
    updatedRatings[row] = rating;
    setReviewRatings(updatedRatings);
    };


    useEffect(() => {
        dispatch(fetchItem(itemId));
    }, [dispatch, itemId]);


    useEffect(() => {
      dispatch(fetchReview(itemId));
    }, [dispatch, itemId]);



    const handleAddToShoppingList = (e) => {
        e.preventDefault();
        if (!sessionUser) {
          history.push(`/login`);
        } else {
          dispatch(createShoppingListItem(userId, itemId, itemQuantity))
            history.push('/shopping_lists');
        }
      };

      if (!item) {
        return null;
    }

    const updateSelector = (e) => {
        setItemQuantity(parseInt(e.currentTarget.value))
    }

    const renderRatingStars = (rating) => {
      const starIcons = [];
      for (let i = 1; i <= 5; i++) {
        starIcons.push(
          <span
            key={i}
            className={`star ${i <= rating ? 'filled' : ''}`}
            onClick={() => handleRatingClick(rating)}
          >
            ★
          </span>
        );
      }
      return starIcons;
    };

    const handleDeleteReview = (reviewId) => {
      dispatch(deleteReview(reviewId));
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
                    <hr></hr>

                    <div className="reviews-container">

                        <div className="reviews-container">
                        <CreateReviews/>
                        </div>
                <div className="reviews-list">
                    <h4 className="reviews-word">Reviews:</h4>

                    {reviews
                      .filter(review => review.itemId === item.id)
                      .map(review => (
                      <div key={review.id}>
                        <p>Rating: {renderRatingStars(review.rating)}</p>
                        <p>Title: {review.title}</p>
                        <p>Body: {review.body}</p>
                        {review.user && <p>Author: {review.user.username}</p>}
                        {userId === review.userId && (
                  <div>
                    <button
                      onClick={() => dispatch(deleteReview(review.id))}
                    >
                      Delete
                    </button>
                    <EditReviews review={review} />
                  </div>
                        )}

                    <hr />
                  </div>
                    ))}
                {reviews.filter(review => review.itemId === item.id).length === 0 && (
    <p>Be the First to Leave a Review</p>
  )}
</div>

                    <br />
                    <br />
                    </div>
            </div>
        </div>
    )

}

export default ItemShow;

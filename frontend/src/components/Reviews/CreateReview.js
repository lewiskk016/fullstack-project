
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchItem } from '../../store/item';
import { useHistory } from 'react-router-dom';
import { createReview, fetchAllReviews } from '../../store/reviews';
import {retrieveReview } from '../../store/reviews';
import {updateReview, deleteReview} from '../../store/reviews';
import './CreateReview.css';

const CreateReviews = ({review}) => {

  const [reviewRatings, setReviewRatings] = useState([0]);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user?.id)
  const history = useHistory();
     const { itemId } = useParams();
  const sessionUser = useSelector(state => state.session.user)

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    const validationErrors = [];
    if (!reviewTitle.trim()) {
      validationErrors.push('Please enter a title.');
    }
    if (!reviewBody.trim()) {
      validationErrors.push('Please enter a review body.');
    }
    if (reviewRatings[0] === 0) {
      validationErrors.push('Please select a rating.');
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }


    const reviewObject = {
      rating: reviewRatings,
      title: reviewTitle,
      body: reviewBody,
      userId: userId,
      itemId: itemId,
    };
    dispatch(createReview(reviewObject));
    setReviewTitle('');
    setReviewBody('');
    setReviewRatings([0]);
    setErrors([]);
  };

  if (!sessionUser) {
    return (
      <div className="review-form-container">
        <p>Only logged-in users can write reviews.</p>
      </div>
    );
  }

  return (
    <div className="review-form-container">
      <h3 className="write-a-review">Write a Review</h3>
      {errors.length > 0 && (
        <div className="errors-container">
          {errors.map((error, index) => (
            <p key={index} className="error-message">
              {error}
            </p>
          ))}
        </div>
      )}
      <form onSubmit={handleReviewSubmit}>
      <div className="form-group">
          <label htmlFor="review-title">Title</label>
          <input
            type="text"
            name="review-title"
            value={reviewTitle}
            onChange={(e) => setReviewTitle(e.target.value)}
            className={errors.includes('Please enter a title.') ? 'error-field' : ''}
          />
        </div>
        <div className="form-group">
          <label htmlFor="review-body">Description</label>
          <textarea
            name="review-body"
            value={reviewBody}
            onChange={(e) => setReviewBody(e.target.value)}
            className={errors.includes('Please enter a review body.') ? 'error-field' : ''}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Rating</label>
          <div className="rating-stars">
  {[1, 2, 3, 4, 5].map((rating) => (
    <span
      key={rating}
      className={`star ${rating <= reviewRatings ? 'filled' : ''}`}
      onClick={() => setReviewRatings(rating)}
    >
      ★
    </span>
  ))}
  <hr />
</div>

        </div>

        <button type="submit">Submit Review</button>
      </form>
      <hr></hr>
    </div>
  );
};

export default CreateReviews;


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
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user?.id)
  const history = useHistory();
     const { itemId } = useParams();
  const sessionUser = useSelector(state => state.session.user)

  const handleReviewSubmit = (e) => {
    e.preventDefault();
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
  };

  const handleDeleteReview = e => {
    e.preventDefault();
    dispatch(deleteReview(review.id));
  };


  const handleUpdateReview = e => {
    e.preventDefault();
    const reviewObject = {
      rating: reviewRatings,
      title: reviewTitle,
      body: reviewBody,
      userId: userId,
      itemId: itemId,
    };
    dispatch(updateReview(reviewObject));
    setReviewTitle('');
    setReviewBody('');
    setReviewRatings([0]);
  };

  return (
    <div className="review-form-container">
      <h3>Write a Review</h3>
      <form onSubmit={handleReviewSubmit}>
        <div className="form-group">
          <label htmlFor="review-title">Title</label>
          <input
            type="text"
            name="review-title"
            value={reviewTitle}
            onChange={(e) => setReviewTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="review-body">Body</label>
          <textarea
            name="review-body"
            value={reviewBody}
            onChange={(e) => setReviewBody(e.target.value)}
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
          </div>

        </div>

        <button type="submit">Submit Review</button>
      </form>


    </div>
  );
};

export default CreateReviews;










{/* <div className="update-delete-reviews">
        <button type="button" onClick={handleUpdateReview}>Edit Your Review</button>
        <button type="button" onClick={handleDeleteReview}>Delete</button>
        </div> */}











// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { createReview, updateReview, deleteReview } from '../../store/reviews';

// const CreateReviews = ({ review }) => {
//   const [reviewRatings, setReviewRatings] = useState([0]);
//   const [reviewTitle, setReviewTitle] = useState('');
//   const [reviewBody, setReviewBody] = useState('');
//   const dispatch = useDispatch();
//   const { itemId } = useParams();
//   const session = useSelector(state => state.session);
//   const sessionUser = session.user;
//   const userId = sessionUser?.id;

//   const handleReviewSubmit = e => {
//     e.preventDefault();
//     const reviewObject = {
//       rating: reviewRatings,
//       title: reviewTitle,
//       body: reviewBody,
//       userId: userId,
//       itemId: itemId,
//     };
//     dispatch(createReview(reviewObject));
//     setReviewTitle('');
//     setReviewBody('');
//     setReviewRatings([0]);
//   };

//   const handleDeleteReview = e => {
//     e.preventDefault();
//     dispatch(deleteReview(review.id));
//   };

//   const deleteButton =
//     review && sessionUser?.id === review.userId ? (
//       <button id="reviewDeleteButton" onClick={handleDeleteReview}>
//         Delete
//       </button>
//     ) : null;

//   const handleUpdateReview = e => {
//     e.preventDefault();
//     const reviewObject = {
//       rating: reviewRatings,
//       title: reviewTitle,
//       body: reviewBody,
//       userId: userId,
//       itemId: itemId,
//     };
//     dispatch(updateReview(reviewObject));
//     setReviewTitle('');
//     setReviewBody('');
//     setReviewRatings([0]);
//   };

//   const editButton =
//     review && sessionUser?.id === review.reviewerId ? (
//       <button id="reviewEditButton" onClick={handleUpdateReview}>
//         Edit
//       </button>
//     ) : null;

//   return (
//     <div className="review-form-container">
//       <h3>Write a Review</h3>
//       <form onSubmit={handleReviewSubmit}>
//         {/* Rest of the form code */}
//         <div className="actions">
//           {editButton}
//           {deleteButton}
//         </div>
//         <button type="submit">Submit Review</button>
//       </form>
//     </div>
//   );
// };

// export default CreateReviews;

import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {createReview, updateReview, deleteReview} from '../../store/reviews';

const EditReviews = ({review}) => {
    const [editMode, setEditMode] = useState(false);
    const [editRatings, setEditRatings] = useState(review.rating)
    const [editTitle, setEditTitle] = useState(review.title);
    const [editBody, setEditBody] = useState(review.body);
    const dispatch = useDispatch();
    const session = useSelector(state => state.session);
    const sessionUser = session.user;


   const handleEditReview = e => {
    const reviewObject = {
        ...review,
        rating: editRatings,
        title: editTitle,
        body: editBody,

       };
         dispatch(updateReview(reviewObject));
         setEditMode(false);
        };

        const toggleEditMode = () => {
            setEditMode(!editMode);
        };

        if (!editMode) {
            return (
              <div className="edit-mode-button">
                <button onClick={toggleEditMode}>Edit</button>
              </div>
            );
          }

        return (
            <div className="edit-container">
                <form onSubmit={handleEditReview}>
                    <div>
                        <label>
                            <input
                                type="text"
                                placeholder="Title"
                                value={editTitle}
                                onChange={e => setEditTitle(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="text"
                                placeholder="Body"
                                value={editBody}
                                onChange={e => setEditBody(e.target.value)}
                            />
                        </label>
                    </div>


                    <div className="form-group">
                        <label>Rating</label>
                        <div className="rating-stars">
                            {[1, 2, 3, 4, 5].map((rating) => (
                            <span
                                key={rating}
                                className={`star ${rating <= editRatings ? 'filled' : ''}`}
                                onClick={() => setEditRatings(rating)}
                                >
                                ★
                            </span>
                            ))}
                        </div>
                    </div>
                    
                    <div>
                        <button type="submit">Edit Review</button>
                    </div>
                </form>
            </div>
        )
    }

export default EditReviews;

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
    const {itemId} = useParams();
    const session = useSelector(state => state.session);
    const sessionUser = session.user;
    const userId = sessionUser?.id;

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
              <div>
                {/* <div>Title: {review.title}</div>
                <div>Body: {review.body}</div>
                <div>Rating: {review.rating}</div> */}
                <button onClick={toggleEditMode}>Edit</button>
              </div>
            );
          }

        return (
            <div>
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
                    <div>
                        <label>
                            <input
                                type="text"
                                placeholder="Rating"
                                value={editRatings}
                                onChange={e => setEditRatings(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <button type="submit">Edit Review</button>
                    </div>
                </form>
            </div>
        )
    }

export default EditReviews;

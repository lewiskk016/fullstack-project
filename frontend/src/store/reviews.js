import csrfFetch from './csrf';
import { retrieveItem } from './item';

export const RETRIEVE_REVIEW = 'reviews/RETRIEVE_REVIEW'
export const RETRIEVE_REVIEWS = 'reviews/RETRIEVE_REVIEWS'
export const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW'

const retrieveReview = (review) => {
    return {
        type: RETRIEVE_REVIEW,
        review
    }
}

const retrieveReviews = (reviews) => {
    return {
        type: RETRIEVE_REVIEWS,
        reviews
    }
}

const removeReview = (reviewId) => {
    return {
        type: REMOVE_REVIEW,
        reviewId
    }
}

export const getReview = (reviewId) => (state) => {
    return state?.reviews ? state.reviews[reviewId] : null;
}

export const getReviews = (state) => {
    return state?.reviews ? Object.values(state.reviews) : [];
}

export const fetchAllReviews = (itemId) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${itemId}`)

    if(res.ok){
        const data = await res.json()
        dispatch(retrieveReviews(data))
    }
}

export const fetchReview = (reviewId) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`);

    if (res.ok){
        const data = await res.json();
        dispatch(retrieveReview(data));
    }
}

export const createReview = (review) => async (dispatch) => {
    const res = await csrfFetch('/api/reviews/', {
        method: 'POST',
        body: JSON.stringify({review})
    });
    if(res.ok){
        const data = await res.json();
        dispatch(retrieveReview(data));
    }
}

export const updateReview = (review) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${review.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({review})
    });

    if(res.ok){
        const data = await res.json();
        dispatch(retrieveReview(data));
    }
}

export const deleteReview = reviewId => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    });

    if(res.ok){
        dispatch(removeReview(reviewId));
    }
}

const reviewsReducer = (state = {}, action) => {
    switch (action.type) {
      case RETRIEVE_REVIEW:
        return { ...state, [action.review.id]: action.review };
      case RETRIEVE_REVIEWS:
        return { ...state, ...action.reviews };
      case REMOVE_REVIEW:
        const newState = { ...state };
        delete newState[action.reviewId];
        return newState;
      default:
        return state;
    }
  }

export default reviewsReducer

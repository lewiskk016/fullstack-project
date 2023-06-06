import csrfFetch from './csrf';
import { retrieveItem, retrieveItems } from './item';

export const RETRIEVE_SHOPPING_LIST_ITEMS = 'RETRIEVE_SHOPPING_LIST_ITEMS';

export const RETRIEVE_SHOPPING_LIST_ITEM = 'RETRIEVE_SHOPPING_LIST_ITEM';

export const REMOVE_SHOPPING_LIST_ITEM = 'REMOVE_SHOPPING_LIST_ITEM';

const retrieveShoppingListItem = (shoppingListItem) => ({
    type: RETRIEVE_SHOPPING_LIST_ITEM,
    shoppingListItem
});

const retrieveShoppingListItems = (shoppingListItems) => ({
    type: RETRIEVE_SHOPPING_LIST_ITEMS,
    shoppingListItems
});

const removeShoppingListItem = (shoppingListItemId) => ({
    type: REMOVE_SHOPPING_LIST_ITEM,
    shoppingListItemId
});

export const getShoppingListItem = (shoppingListItemId) => state => {
    return state?.shoppingListItems? state.shoppingListItems[shoppingListItemId] : null;
}

export const getShoppingListItems = state => {
    return state?.shoppingListItems? Object.values(state.shoppingListItems) : [];
}

export const fetchAllShoppingListItems = () => async(dispatch) => {
    const response = await csrfFetch('/api/shopping_lists');
    if (response.ok) {
      const data = await response.json();
      dispatch(retrieveShoppingListItems(data.shoppingListItems));
      dispatch(retrieveItems(data.items));
    }
  };

  export const fetchShoppingListItem = (shoppingListItemId) => async (dispatch) => {
    const response = await csrfFetch(`/api/shopping_lists/${shoppingListItemId}`);
    if (response.ok) {
        const data = await response.json();
        dispatch(retrieveShoppingListItem(data.shoppingListItem));
        dispatch(retrieveItem(data.item));
    }
    };

export const createShoppingListItem = (shoppingListItem) => async (dispatch) => {
    const response = await csrfFetch('/api/shopping_lists', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(shoppingListItem)
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(retrieveShoppingListItem(data.shoppingListItem));
        dispatch(retrieveItem(data.item));
    }
}


    export const updateShoppingListItem = (shoppingListItem) => async (dispatch) => {
        const response = await csrfFetch(`/api/shopping_lists/${shoppingListItem.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(shoppingListItem)
        });

        if (response.ok) {
            const data = await response.json();
            dispatch(retrieveShoppingListItem(data.shoppingListItem));
            dispatch(retrieveItem(data.item));
        }
    }

    export const deleteShoppingListItem = (shoppingListItemId) => async (dispatch) => {
        const response = await csrfFetch(`/api/shopping_lists/${shoppingListItemId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            dispatch(removeShoppingListItem(shoppingListItemId));
        }
    }

    // const initialState = {};

    const shoppingListReducer = (state = {}, action) => {
        switch(action.type) {
            case RETRIEVE_SHOPPING_LIST_ITEMS:
                return {...state, ...action.shoppingListItems};
            case RETRIEVE_SHOPPING_LIST_ITEM:
                return {...state, [action.shoppingListItem.id]: action.shoppingListItem};
            case REMOVE_SHOPPING_LIST_ITEM:
                const newState = {...state};
                delete newState[action.shoppingListItemId];
                return newState;
            default:
                return state;
        }
    }

    export default shoppingListReducer;

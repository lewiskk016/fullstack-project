import csrfFetch from './csrf';
import { retrieveItem, retrieveItems } from './item';

export const RETRIEVE_SHOPPING_LIST_ITEMS = 'RETRIEVE_SHOPPING_LIST_ITEMS';
export const RETRIEVE_SHOPPING_LIST_ITEM = 'RETRIEVE_SHOPPING_LIST_ITEM';
export const REMOVE_SHOPPING_LIST_ITEM = 'REMOVE_SHOPPING_LIST_ITEM';
export const REMOVE_SHOPPING_LIST_ITEMS = 'REMOVE_SHOPPING_LIST_ITEMS'

const retrieveShoppingListItem = (itemId, quantity) =>({
    type: RETRIEVE_SHOPPING_LIST_ITEM,
    payload: {itemId, quantity}
});

const retrieveShoppingListItems = (itemIds) => ({
    type: RETRIEVE_SHOPPING_LIST_ITEMS,
    itemIds
});

const removeShoppingListItem = (itemId) => ({
    type: REMOVE_SHOPPING_LIST_ITEM,
     itemId
});

const removeShoppingListItems = (itIds) => ({
    type: REMOVE_SHOPPING_LIST_ITEMS,
    itIds
});

// export const getShoppingListItem = (shoppingListItemId) => state => {
//     return state?.shoppingListItems? state.shoppingListItems[shoppingListItemId] : null;
// }

// export const getShoppingListItems = state => {
//     return state?.shoppingListItems? Object.values(state.shoppingListItems) : [];
// }

export const fetchShoppingCart = () => async (dispatch) => {
    const response = await csrfFetch('/api/shopping_lists');
    if (response.ok) {
      const data = await response.json();
      dispatch(retrieveShoppingListItems(data));
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

export const createShoppingListItem = (userId, itemId, quantity) => async (dispatch) => {
    debugger
    const response = await csrfFetch('/api/shopping_lists', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userId, itemId, quantity})
    });
    if (response.ok) {
        debugger
        const data = await response.json();
        debugger
        dispatch(retrieveShoppingListItem(data.itemId, data.quantity));
    }
}


    export const updateShoppingListItem = (userId, itemId, quantity) => async (dispatch) => {
        const response = await csrfFetch('/api/shopping_lists', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userId, itemId, quantity)
        });

        if (response.ok) {
            const data = await response.json();
            dispatch(retrieveShoppingListItem(data.itemId, data.quantity));
            // dispatch(retrieveItem(data.item));
        }
    }

    export const deleteShoppingListItem = (userId, itemId) => async (dispatch) => {
        const response = await csrfFetch(`/api/shopping_lists/${itemId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userId, itemId)
        });

        if (response.ok) {
            dispatch(removeShoppingListItem(itemId));
        }
    }


    const shoppingListReducer = (state = {}, action) => {
        debugger
        switch(action.type) {
            case RETRIEVE_SHOPPING_LIST_ITEMS:
                debugger
                return {...state, ...action.shoppingListItems};
            case RETRIEVE_SHOPPING_LIST_ITEM:
                debugger
                return {...state, [action.shoppingListItem.id]: action.shoppingListItem};
            case REMOVE_SHOPPING_LIST_ITEM:
                debugger
                const newState = {...state};
                delete newState[action.shoppingListItemId];
                return newState;
            default:
                return state;
        }
    }

    export default shoppingListReducer;

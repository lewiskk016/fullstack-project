import csrfFetch from './csrf';
import { retrieveItem } from './item';

export const RETRIEVE_SHOPPING_LIST_ITEM = 'RETRIEVE_SHOPPING_LIST_ITEM';
export const RETRIEVE_SHOPPING_LIST_ITEMS = 'RETRIEVE_SHOPPING_LIST_ITEMS';
export const REMOVE_SHOPPING_LIST_ITEM = 'REMOVE_SHOPPING_LIST_ITEM';
export const REMOVE_SHOPPING_LIST_ITEMS = 'REMOVE_SHOPPING_LIST_ITEMS'
export const UPDATE_SHOPPING_LIST_ITEM = 'UPDATE_SHOPPING_LIST_ITEM';

const retrieveShoppingListItem = (itemId, quantity) =>({
    type: RETRIEVE_SHOPPING_LIST_ITEM,
    payload: {itemId, quantity}
});

// const retrieveShoppingListItem = cartItemId => ({
//     type: RETRIEVE_SHOPPING_LIST_ITEM,
//     cartItemId
// });

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

const updateShoppingListItem = (itemId, quantity) => ({
    type: UPDATE_SHOPPING_LIST_ITEM,
    payload: {itemId, quantity}
});

export const getShoppingListItem = (shoppingListItemId) => state => {
    return state?.shoppingListItems? state.shoppingListItems[shoppingListItemId] : null;
}

export const getShoppingListItems = state => {
    if (state.shoppingListItems) {
        return Object.values(state.shoppingListItems);
    } else {
        return [];
    }
}
//     return state?.shoppingListItems? Object.values(state.shoppingListItems) : [];
// }

export const fetchShoppingCart = () => async (dispatch) => {
    const response = await csrfFetch('/api/shopping_lists');
      const data = await response.json();
      dispatch(retrieveShoppingListItems(data));
  };

  export const fetchShoppingListItem = (shoppingListItemId) => async (dispatch) => {
    const response = await csrfFetch(`/api/shopping_lists/${shoppingListItemId}`);
    if (response.ok) {
        const data = await response.json();
        dispatch(retrieveShoppingListItem(data.shoppingListItem));
        // dispatch(retrieveItem(data.item));
    }
    };

export const createShoppingListItem = (userId, itemId, quantity) => async (dispatch) => {
    const response = await csrfFetch('/api/shopping_lists', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userId, itemId, quantity})
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(retrieveShoppingListItem(data.itemId, data.quantity));
        // dispatch(retrieveShoppingListItems(data.itemIds));
    }
}


    export const updateShoppingCart = (userId, itemId, quantity) => async (dispatch) => {
        const response = await csrfFetch('/api/shopping_lists', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userId, itemId, quantity)
        });

        if (response.ok) {
            const data = await response.json();
            dispatch(updateShoppingListItem(data.itemId, data.quantity));
            // dispatch(retrieveItem(data.item));
        }
    }

    export const deleteShoppingListItem = (userId, itemId) => async (dispatch) => {
        const response = await csrfFetch('/api/shopping_lists', {
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

    export const checkoutShoppingList = (userId) => async (dispatch) => {
        const response = await csrfFetch('/api/shopping_lists', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userId)
        });
        if (response.ok) {
            dispatch(removeShoppingListItems());
        }
    }


    const initialState = {};

    const shoppingListReducer = (state = initialState, action) => {
        // Object.freeze(state);
        // nextState = {...state};
        switch(action.type) {

            case RETRIEVE_SHOPPING_LIST_ITEM:
                return {
                        ...state,
                        [action.payload.itemId]: action.payload.quantity,
                        };

            // case RETRIEVE_SHOPPING_LIST_ITEM:
            //     return {...state, [action.payload.itemId]: action.payload.quantity};
            //     // return { ...state, itemIds: [...state.itemIds, action.payload] };
            case RETRIEVE_SHOPPING_LIST_ITEMS:
                // return {...state, ...action.shoppingListItems};
                return {...state, itemIds: action.payload};
            case REMOVE_SHOPPING_LIST_ITEM:
                const newState = {...state};
                delete newState[action.shoppingListItemId];
                return newState;
            default:
                return state;
        }
    }

    export default shoppingListReducer;

import csrfFetch from './csrf';

export const RETRIEVE_ITEMS = 'items/RETRIEVE_ITEMS';
export const RETRIEVE_ITEM = 'items/RETRIEVE_ITEM';

export const retrieveItems = (items) => {
    return {
        type: RETRIEVE_ITEMS,
        items,
    };
}

export const retrieveItem = (item) => {
    return {
        type: RETRIEVE_ITEM,
        item,
    };
}

export const getItems = () => async (dispatch) => {
    const res = await csrfFetch('/api/items');
    const items = await res.json();
    dispatch(retrieveItems(items));
}

export const getItem = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/items/${id}`);
    const item = await res.json();
    dispatch(retrieveItem(item));
}

const itemsReducer = (state = {}, action) => {
    let newState = {};
    switch (action.type) {
        case RETRIEVE_ITEMS:
            action.items.forEach(item => {
                newState[item.id] = item;
            });
            return newState;
        case RETRIEVE_ITEM:
            newState = Object.assign({}, state);
            newState[action.item.id] = action.item;
            return newState;
        default:
            return state;
    }
}

export default itemsReducer;

import csrfFetch from './csrf';

export const RETRIEVE_ITEMS = 'RETRIEVE_ITEMS';
export const RETRIEVE_ITEM = 'RETRIEVE_ITEM';

export const retrieveItems = (items) => {
    return {
      type: RETRIEVE_ITEMS,
      items
    //   : Array.isArray(items) ? items : [],
    };
  };

export const retrieveItem = (item) => {
    return {
        type: RETRIEVE_ITEM,
        item
    };
}

export const getItems = () => async (dispatch) => {
    console.log('Fetching items...');
    const res = await csrfFetch('api/items');
    if (res.ok) {
      console.log('Items response received');
      const items = await res.json();
      console.log('Dispatching retrieveItems');
      dispatch(retrieveItems(items));
    } else {
      console.log('Error fetching items:', res.status, res.statusText);
    }
  };

export const getItem = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/items/${id}`);
    const item = await res.json();
    dispatch(retrieveItem(item));
}

    const itemsReducer = (state = {}, action) => {
        switch (action.type) {
          case RETRIEVE_ITEMS:
            return {...state, ...action.items};
        case RETRIEVE_ITEM:
            return {
                ...state,
                [action.item.id]: action.item,
            };
        default:
            return state;
    }
}

export default itemsReducer;

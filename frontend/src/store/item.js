import csrfFetch from './csrf';

export const RETRIEVE_ITEMS = 'RETRIEVE_ITEMS';
export const RETRIEVE_ITEM = 'RETRIEVE_ITEM';


export const retrieveItems = (items) => {
    return {
      type: RETRIEVE_ITEMS,
      items
    };
  };


export const retrieveItem = (item) => {
    return {
        type: RETRIEVE_ITEM,
        item
    };
}
export const getItems = (state) => {
   return state?.items ? Object.values(state.items) : []
}

export const getItem = (itemId) => (state) => {
  return state?.items ? state.items[itemId] : null
}

export const getItemCategories = (category) => (state) => {
  const items = getItems(state);
  if (category) {
    return items.filter((item) =>
      item.category.toLowerCase() === category.toLowerCase()
    );
  } else {
    return items;
  }
};


export const fetchItems = () => async (dispatch) => {
    const response = await csrfFetch('/api/items');
    if (response.ok) {
      const data = await response.json();
      dispatch(retrieveItems(data));
    }
  };

export const fetchItem = (itemId) => async (dispatch) => {
    const response = await csrfFetch(`
    /api/items/${itemId}`);
    if (response.ok) {
        const data = await response.json();
        dispatch(retrieveItem(data));
    }
}


const itemsReducer = (state = {}, action) => {
  switch (action.type) {
    case RETRIEVE_ITEMS:
        return {...state, ...action.items};
    case RETRIEVE_ITEM:
      if (action.item && action.item.id) {
      return { ...state, [action.item.id]: action.item };
               } else {
                return state;
               }

    default:
      return state;
  }
};

export default itemsReducer;





 // case RETRIEVE_ITEMS:
    //   if (Array.isArray(action.items)) {
    //     return action.items.reduce((acc, item) => {
    //       acc[item.id] = item;
    //       return acc;
    //     }, {});
    //   } else {
    //     return state; // Return the previous state when action.items is not an array
    //   }

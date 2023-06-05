import csrfFetch from './csrf';

export const RETRIEVE_ITEMS = 'RETRIEVE_ITEMS';
export const RETRIEVE_ITEM = 'RETRIEVE_ITEM';

// debugger
export const retrieveItems = (items) => {
    return {
      type: RETRIEVE_ITEMS,
      items
    };
  };

  // debugger
export const retrieveItem = (item) => {
    return {
        type: RETRIEVE_ITEM,
        item
    };
}
// debugger
export const getItems = (state) => {
   return state?.items ? Object.values(state.items) : []
}

// debugger
export const getItem = (itemId) => (state) => {
  return state?.items ? state.items[itemId] : null
}

// debugger
export const fetchItems = () => async (dispatch) => {
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

// debugger
export const fetchItem = (itemId) => async (dispatch) => {
  console.log('Fetching item...');
    const response = await csrfFetch(`
    /api/items/${itemId}`);
    if (response.ok) {
      console.log('Item response received');
        const item = await response.json();
        console.log('Dispatching retrieveItem');
        dispatch(retrieveItem(item));
    }
}

// export const fetchReport = (reportId) => async (dispatch) => {
//   const res = await fetch(`/api/reports/${reportId}`);
//   if (res.ok) {
//       const report = await res.json();
//       dispatch({ type: RECEIVE_REPORT, report });
//   }
// };

// debugger
    const itemsReducer = (state = {}, action) => {
      let newState = {...state}
        switch(action.type) {
          case RETRIEVE_ITEMS:
            if (Array.isArray(action.items)) {
              return action.items.reduce((acc, item) => {
                acc[item.id] = item;
                return acc;
              }, {});
            } else {
              return action.items;
            }
          // case RETRIEVE_ITEM:
          //   newState[action.item.item.id] = action.item.item;
          //   return newState;
          // default:
          //   return state;
        //     return {...state, ...action.items};
        case RETRIEVE_ITEM:
            return { ...state, [action.item.id]: action.item};
        default:
            return state;
    }
}

export default itemsReducer;

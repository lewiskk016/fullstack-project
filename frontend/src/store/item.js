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

export const fetchItems = () => async (dispatch) => {
    const response = await csrfFetch('/api/items');
    if (response.ok) {
      const data = await response.json();
      dispatch(retrieveItems(data));
    } else {
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

// export const fetchReport = (reportId) => async (dispatch) => {
//   const res = await fetch(`/api/reports/${reportId}`);
//   if (res.ok) {
//       const report = await res.json();
//       dispatch({ type: RECEIVE_REPORT, report });
//   }
// };

//     const itemsReducer = (state = {}, action) => {
//       let newState = {...state}
//         switch(action.type) {
//           case RETRIEVE_ITEMS:
//             if (Array.isArray(action.items)) {
//               return action.items.reduce((acc, item) => {
//                 acc[item.id] = item;
//                 return acc;
//               }, {});
//             } else {
//               return action.items;
//             }
//           // case RETRIEVE_ITEM:
//           //   newState[action.item.item.id] = action.item.item;
//           //   return newState;
//           // default:
//           //   return state;
//         //     return {...state, ...action.items};
//         case RETRIEVE_ITEM:
//             return { ...state, [action.item.id]: action.item};
//         default:
//             return state;
//     }
// }


// const itemsReducer = (state = {}, action) => {
//   switch (action.type) {
//     case RETRIEVE_ITEMS:
//       if (Array.isArray(action.items)) {
//         return action.items.reduce((acc, item) => {
//           acc[item.id] = item;
//           return acc;
//         }, {});
//       } else {
//         return action.items;
//       }
//     case RETRIEVE_ITEM:
//       return { ...state, [action.item.id]: action.item };
//     default:
//       return state;
//   }
// };


// const itemsReducer = (state = {}, action) => {
//   switch (action.type) {
//     case RETRIEVE_ITEMS:
//       if (Array.isArray(action.items)) {
//         return action.items.reduce((acc, item) => {
//           acc[item.id] = item;
//           return acc;
//         }, {});
//       } else {
//         return action.items;
//       }
//     case RETRIEVE_ITEM:
//       if (action.item && action.item.id) { // Check if action.item and action.item.id are defined
//         return { ...state, [action.item.id]: action.item };
//       } else {
//         return state;
//       }
//     default:
//       return state;
//   }
// };

// export default itemsReducer;

// export default itemsReducer;



const itemsReducer = (state = {}, action) => {
  // Object.freeze(state)
  // let newState = {...state}
  switch (action.type) {
    case RETRIEVE_ITEMS:
        return {...state, ...action.items};
    case RETRIEVE_ITEM:
      if (action.item && action.item.id) { // Check if action.item and action.item.id are defined
      return { ...state, [action.item.id]: action.item };
               } else {
                return state;
               }
        // return { ...state, [action.item.id]: action.item };

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

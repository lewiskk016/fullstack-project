// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAllShoppingListItems } from '../../store/shoppinglist';
// import ShoppingListIndexItem from './TestShoppingListIndex0';
// // import './ShoppingList.css'
// import { deleteShoppingListItem } from '../../store/shoppinglist';
// import {useState} from 'react'


// const ShoppingListIndex = () => {
//     console.log("ShoppingListIndex is running")
//     const dispatch = useDispatch();
//     const shoppingListItems = useSelector(state => state.shoppingListItems);
//     // const items = useSelector(state => state.items);



//     useEffect(() => {
//         console.log("useEffect is running")
//         dispatch(fetchAllShoppingListItems());
//     }, [dispatch]);


//     const checkoutHandler = (e) => {
//         e.preventDefault()
//         shoppingListItems.forEach((item) => {
//             dispatch(deleteShoppingListItem(item.id))
//         })

//     }


//     return (
//         <div>
//           <h1 className="shopping-list" Shopping List>This is the Shopping List</h1>
//           {shoppingListItems.map(item => (
//             <ShoppingListIndexItem key={item.id} cartItem={item} />
//           ))}
//         </div>
//       );
// }

// export default ShoppingListIndex;

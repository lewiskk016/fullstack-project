import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllShoppingListItems } from '../../store/shoppinglist';
import ShoppingListIndexItem from './ShoppingListIndex';
// import './ShoppingList.css'
// import { deleteShoppingListItem } from '../../store/shoppinglist';
import {useState} from 'react'


const ShoppingListIndex = props => {
    const dispatch = useDispatch();
    const shoppingListItems = useSelector(state => state.shoppingListItems);
    const items = useSelector(state => state.items);



    useEffect(() => {
        dispatch(fetchAllShoppingListItems());
    }, [dispatch]);


    // const checkoutHandler = (e) => {
    //     e.preventDefault()
    //     shoppingListItems.forEach((item) => {
    //         dispatch(deleteShoppingListItem(item.id))
    //     })

    // }


    return (
        <>
        <div className="shopping-list-container">
            <p>Hello From App</p>
        </div>
        </>
    )
}

export default ShoppingListIndex;

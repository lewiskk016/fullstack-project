import {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchItem, getItem } from '../../store/item';
import './ItemsShow.css';

// debugger
const ItemShow = () => {
    const { itemId } = useParams();
    const dispatch = useDispatch();
    const item = useSelector(state => state.items[itemId]);


    useEffect(() => {
        console.log("Dispatching fetchItem");
        dispatch(fetchItem(itemId));
    }, [dispatch, itemId]);

    if (!item) {
        return null;
    }

// debugger
    return (
        <div className="item-show-container">
            {item && (
                <div className="item">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                </div>
            )}
        </div>
    )
}

export default ItemShow;

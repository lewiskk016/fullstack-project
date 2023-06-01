
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../store/item';
// import { useHistory } from 'react-router-dom';
import './ItemsShow.css';

const ItemsShow = () => {
  const dispatch = useDispatch();
//   const history = useHistory();
  const items = useSelector(state => Object.values(state.items));

  useEffect(() => {
    console.log("Dispatching getItems")
    dispatch(getItems());
  }, [dispatch]);

  console.log("Items:", items)


  return (
    <div className="items-container">
    <div className='itemslist'>
        {items.map(item => (
            <div key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Category: {item.category}</p>
                <p>Price: {item.price}</p>
            </div>
        ))}
      {/* {items && Object.values(items).map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Category: {item.category}</p>
          <p>Price: {item.price}</p>
        </div>
      ))} */}
    </div>
    </div>
  );
};

export default ItemsShow;

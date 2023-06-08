import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems} from '../../store/item';
import './ItemsIndex.css';
import {Link} from 'react-router-dom';

const ItemsIndex = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => Object.values(state.items));

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);


  return (
    <div className="items-container">
        {/* {items.map(item => (

          <div className="item" key={item.id}>
            <img src={item.photoUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
          </div>
        ))} */}
        {items.map(item => (
          <Link to={`/items/${item.id}`} key={item.id} className="item">
          <img className="photo" src={item.photoUrl} alt={item.name} />
          <div className="item-description">
          <h3>{item.name}</h3>
          <span className="price"> Price: </span>
          <br/>
          <span className="item-price"> ${item.price}</span>
          <br />
          <br />
          <span className="pricemessage">
                        Get
                        <b> Fast, Free Shipping </b>
                            with Flyme
                            <br />
          </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ItemsIndex;

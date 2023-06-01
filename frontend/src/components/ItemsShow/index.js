
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../store/item';
import { useHistory } from 'react-router-dom';
import './ItemsShow.css';

const ItemsShow = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const items = useSelector(state => state.itemsReducer);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const handleAllButtonClick = () => {
    history.push(`/items`);
  };

  return (
    <div>
      <button onClick={handleAllButtonClick}>All</button>
      {items && Object.values(items).map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default ItemsShow;


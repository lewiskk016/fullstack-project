import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems} from '../../store/item';
import './ItemsIndex.css';

// debugger
const ItemsIndex = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => Object.values(state.items));

  // debugger
  useEffect(() => {
    console.log("Dispatching getItems");
    dispatch(fetchItems());
  }, [dispatch]);

  // debugger
  // console.log("Items:", items);

  const renderItems = () => {
    const itemsPerRow = 3;
    const rows = [];

    for (let i = 0; i < items.length; i += itemsPerRow) {
      const rowItems = items.slice(i, i + itemsPerRow);
      const row = (
        <div className="row" key={i}>
          {rowItems.map(item => (
            <div className="item" key={item.id}>
              <h3>{item.name}</h3>
              {/* <p>{item.description}</p>
              <p>Category: {item.category}</p> */}
              <p>Price: {item.price}</p>
            </div>
          ))}
        </div>
      );
      rows.push(row);
    }

    return rows;
  };

  return (
    <div className="items-container">
      <div className="itemslist">
        {renderItems()}
      </div>
    </div>
  );
};

export default ItemsIndex;


// const ItemsIndex = ({ items }) => {
//   const dispatch = useDispatch();

//   return (
//     <Link to={`/items/${item.id}`}>{formatDate(item.createdAt)}</Link>
//   )


// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getItems } from '../../store/item';
// import './ItemsShow.css';

// const ItemsShow = () => {
//   const dispatch = useDispatch();
//   const items = useSelector(state => Object.values(state.items));

//   useEffect(() => {
//     console.log("Dispatching getItems")
//     dispatch(getItems());
//   }, [dispatch]);

//   console.log("Items:", items)


//   return (
//     <div className="items-container">
//     <div className='itemslist'>
//         {items.map(item => (
//             <div key={item.id}>
//                 <h3>{item.name}</h3>
//                 {/* <p>{item.description}</p>
//                 <p>Category: {item.category}</p> */}
//                 <p>Price: {item.price}</p>
//             </div>
//         ))}
//     </div>
//     </div>
//   );
// };

// export default ItemsShow;









import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../store/item';
import './ItemsShow.css';

const ItemsShow = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => Object.values(state.items));

  useEffect(() => {
    console.log("Dispatching getItems");
    dispatch(getItems());
  }, [dispatch]);

  console.log("Items:", items);

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

export default ItemsShow;

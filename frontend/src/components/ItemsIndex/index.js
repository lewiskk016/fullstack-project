import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems} from '../../store/item';
import './ItemsIndex.css';

// debugger
// const ItemsIndex = () => {
//   const dispatch = useDispatch();
//   const items = useSelector(state => Object.values(state.items));

//   // debugger
//   useEffect(() => {
//     console.log("Dispatching getItems");
//     dispatch(fetchItems());
//   }, [dispatch]);

//   // debugger
//   // console.log("Items:", items);

//   const renderItems = () => {
//     const itemsPerRow = 3;
//     const rows = [];

//     for (let i = 0; i < items.length; i += itemsPerRow) {
//       const rowItems = items.slice(i, i + itemsPerRow);
//       const row = (
//         <div className="row" key={i}>
//           {rowItems.map(item => (
//             <div className="item" key={item.id}>
//               <h3>{item.name}</h3>
//               {/* <p>{item.description}</p>
//               <p>Category: {item.category}</p> */}
//               <p>Price: {item.price}</p>
//             </div>
//           ))}
//         </div>
//       );
//       rows.push(row);
//     }

//     return rows;
//   };

//   return (
//     <div className="items-container">
//       <div className="itemslist">
//         {renderItems()}
//       </div>
//     </div>
//   );
// };


// const ItemsIndex = () => {
//   const dispatch = useDispatch();
//   const items = useSelector(state => Object.values(state.items));

//   useEffect(() => {
//     dispatch(fetchItems());
//   }, [dispatch]);

//   return (
//     <div className="items-container">
//       <div className="items-list">
//         {items.map(item => (
//           // <Link to={`/items/${item.id}`} key={item.id} className="item-link">
//             <div className="item">
//               <h3>{item.name}</h3>
//               {/* <p>{item.description}</p>
//               <p>Category: {item.category}</p> */}
//               <p>Price: {item.price}</p>
//             </div>
//           // </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ItemsIndex;

// export default ItemsIndex;


// const ItemsIndex = ({ items }) => {
//   const dispatch = useDispatch();

//   return (
//     <Link to={`/items/${item.id}`}>{formatDate(item.createdAt)}</Link>
//   )





// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchItems } from '../../store/item';
// import './ItemsIndex.css';

const ItemsIndex = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => Object.values(state.items));

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  console.log("Fetching Items:", items);

  return (
    <div className="items-container">
        {items.map(item => (
          <div className="item" key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
          </div>
        ))}
            <div className="items-list">
      </div>
    </div>
  );
};

export default ItemsIndex;

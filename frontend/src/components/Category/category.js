import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../store/item';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Category = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => Object.values(state.items));
    const { category } = useParams();

    useEffect(() => {
      dispatch(fetchItems());
    }, [dispatch]);

    const filterItems = () => {
      if (category) {
        const filteredItems = items.filter((item) =>
          item.category.toLowerCase().includes(category.toLowerCase())
        );
        return filteredItems;
      } else {
        return items;
      }
    };

    const categoryResults = filterItems();

    return (
      <div className="search-container">
        <h2>Search Results for "{category}"</h2>
        {categoryResults.length === 0 ? (
          <h3 className="no-results">No results found</h3>
        ) : (
          <div className="items-container">
            {categoryResults.map((item) => (
              <Link to={`/items/${item.id}`} key={item.id} className="item">
                <img className="photo" src={item.photoUrl} alt={item.name} />
                <div className="item-description">
                  <h3>{item.name}</h3>
                  <span className="price">Price:</span>
                  <br />
                  <span className="item-price">${item.price}</span>
                  <br />
                  <br />
                  <span className="pricemessage">
                    Get <b>Fast, Free Shipping</b> with Flyme
                    <br />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  
export default Category;

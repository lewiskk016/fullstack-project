import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../store/item';
import './Search.css';
import { Link } from 'react-router-dom';

const Search = ({ query }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => Object.values(state.items));
  const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  useEffect(() => {
    filterItems(query);
  }, [query]);

  const filterItems = (query) => {
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(filteredItems);
  };

  return (
    <div className="search-container">
      <h2>Search Results for "{query}"</h2>
      <div className="items-container">
        {searchResults.map(item => (
          <Link to={`/items/${item.id}`} key={item.id} className="item">
            <img className="photo" src={item.photoUrl} alt={item.name} />
            <div className="item-description">
              <h3>{item.name}</h3>
              <span className="price">Price:</span>
              <br/>
              <span className="item-price">${item.price}</span>
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
    </div>
  );
};

export default Search;

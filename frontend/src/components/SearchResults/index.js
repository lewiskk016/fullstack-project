import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../store/item';
import './Search.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Search = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => Object.values(state.items));
  const { query} = useParams();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  useEffect(() => {
    filterItems(query);
  }, [query]);

  const filterItems = (query) => {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    return filteredItems;
  };

  const searchResults = filterItems(query); // Filter items based on the query


  return (
    <div className="search-container">
      <h2>Search Results for "{query}"</h2>
      {searchResults.length === 0? (
        <h3 className="no-results">No results found</h3>
      ) : (
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
      )}
    </div>
  );
};

export default Search;

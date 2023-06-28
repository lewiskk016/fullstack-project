import {useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import './SearchBar.css'
import { searchRequest } from "../../store/search";


const SearchBar = () => {
    const [query, setQueryTerm] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted"); // Add this line
        dispatch(searchRequest(query));
    };

    return (
        <div className="search-bar-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search Aveson"
                    value={query}
                    onChange={(e) => setQueryTerm(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>
        </div>
    );
    }

export default SearchBar;

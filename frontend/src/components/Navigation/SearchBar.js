import {useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import './SearchBar.css'
import { searchRequest } from "../../store/search";
import Search from "../SearchResults";
import {useRef } from "react";


const SearchBar = () => {
    const [query, setQueryTerm] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const previousQuery = useRef(""); // Track the previous query value




    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim === null) {
            history.push("/items")
        }
        if (query.trim() === "" && previousQuery.current.trim() === "") {
            history.push("/items")
    } else {
        dispatch(searchRequest(query));
        history.push(`/searches/${query}`);
    }
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

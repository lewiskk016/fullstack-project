import {useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import './SearchBar.css'


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(search(searchTerm));
        history.push("/search");
    };

    return (
        <div className="search-bar-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search Aveson"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>
        </div>
    );
    }

export default SearchBar;

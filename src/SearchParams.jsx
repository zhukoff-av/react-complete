import {useState} from "react";
import React from "react";

const SearchParams = () => {
    const [location, setLocation] = useState('Seatle, WA')
    return (
        <div className="search-params">
            <h1>Hello! </h1>
            <form>
                <label htmlFor="location">
                    Location
                    <input
                        onChange={(e) => setLocation(e.target.value)}
                        id="location"
                        value={location}
                        placeholder="Location"/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;
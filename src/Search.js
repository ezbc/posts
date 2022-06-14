import React, { useEffect, useState } from 'react';

function Search({ handleSearch }) {
    const [searchText, setSearchText] = useState('');

    const submit = event => {
        event.preventDefault();
        !!searchText && handleSearch(searchText);
    };

    return (
        <div>
            <form onSubmit={submit}>
                {/* submit method instead of submit function */}
                <label htmlFor="search">Search</label>
                <input
                    id="search"
                    value={searchText}
                    onChange={event => setSearchText(event.target.value)}
                ></input>
                <button type="submit">Submit search</button>
            </form>
        </div>
    );
}

export default Search;

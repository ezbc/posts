import { useEffect, useState } from 'react';

const Search = ({ availablePosts, handleSearch, ...props }) => {
    const [searchText, setSearchText] = useState('');

    const submit = event => {
        event.preventDefault();
        !!searchText && handleSearch(searchText);
    };

    return (
        <div {...props}>
            <form onSubmit={submit}>
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
};

export default Search;

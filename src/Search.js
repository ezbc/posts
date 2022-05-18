import { useEffect, useState } from 'react';

const Search = ({ availablePosts, handleSearch, ...props }) => {
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        handleSearch(searchText);
    }, [searchText, availablePosts]);

    return (
        <div {...props}>
            <label htmlFor="search">Search</label>
            <input
                id="search"
                value={searchText}
                onChange={event => setSearchText(event.target.value)}
            ></input>
        </div>
    );
};

export default Search;

import { useEffect, useState } from 'react';

const Search = ({ availablePosts, handleFilteredPosts, ...props }) => {
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        handleFilteredPosts(
            availablePosts.filter(post => {
                const lowerCaseSearchText = searchText.toLowerCase();
                return (
                    post.username.toLowerCase().includes(lowerCaseSearchText) ||
                    post.content.toLowerCase().includes(lowerCaseSearchText)
                );
            })
        );
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

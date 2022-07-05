import React, { useState } from 'react';
import styled from 'styled-components';
import { isNil } from 'ramda';
import Button from 'ui/Button';
import usePosts from 'features/PostState/usePosts';

function Search({ className }) {
    const [searchText, setSearchText] = useState('');
    const { fetchPosts } = usePosts();

    const submit = event => {
        event.preventDefault();
        !isNil(searchText) && fetchPosts({ searchTerm: searchText });
    };

    return (
        <div className={className}>
            <form onSubmit={submit}>
                <input
                    id="search"
                    value={searchText}
                    onChange={event => setSearchText(event.target.value)}
                ></input>
                <Button type="submit">Search</Button>
            </form>
        </div>
    );
}

export default styled(Search)`
    input {
        max-width: 200px;
        margin-right: 1em;
    }
`;

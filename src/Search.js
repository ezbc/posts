import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './ui/Button';

function Search({ handleSearch, className }) {
    const [searchText, setSearchText] = useState('');

    const submit = event => {
        event.preventDefault();
        !!searchText && handleSearch(searchText);
    };

    return (
        <div className={className}>
            <form onSubmit={submit}>
                {/* <label htmlFor="search">Search</label> */}
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

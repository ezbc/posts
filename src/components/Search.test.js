import * as React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Search from './Search';

describe('Search', () => {
    test('When submitting text in the search form, the search component calls the handleSearch', () => {
        render(<Search handleSearch={searchText => console.log(searchText)} />);
        // assert that Search handleSearch callback was called
        // write test code that is NOT reusable and more readable
    });
});

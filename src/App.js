import React from 'react';
import Activities from './Activities';
import Posts from './Posts';
import {
    BrowserRouter,
    HashRouter,
    HistoryRouter,
    Routes,
    Route,
} from 'react-router-dom';
import styled from 'styled-components';
import theme from './theme';

const App = ({ className }) => {
    return (
        <div className={className}>
            <BrowserRouter>
                <Routes>
                    <Route path="/activities" element={<Activities />} />
                    <Route path="/" element={<Posts />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default styled(App)`
    background-color: ${theme.elements.backgroundColor};

    // font-family: Montserrat;
`;

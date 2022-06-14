import React from 'react';
import Activities from './Activities';
import Posts from './Posts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    font-family: ${theme.elements.text.family};
    color: ${theme.elements.text.color};
    font-size: ${theme.elements.text.size};
    background-color: ${theme.elements.background.color};
`;

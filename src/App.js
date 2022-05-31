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

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/activities" element={<Activities />} />
                <Route path="/" element={<Posts />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

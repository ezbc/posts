import { useState } from 'react';

const useSemiPersistentState = (key, initialState) => {
    const item = localStorage.getItem(key);
    const [state, setState] = useState(
        !!item ? JSON.parse(item) : initialState
    );
    useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [state]);

    return [state, setState];
};

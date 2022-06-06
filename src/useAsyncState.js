const useAsyncState = (key, initialState) => {
    const item = JSON.parse(localStorage.getItem(key)) || initialState;
    const getAsync = new Promise(resolve =>
        setTimeout(() => resolve(item), 2000)
    );

    const setLocalState = state =>
        localStorage.setItem(key, JSON.stringify(state));

    const setAsync = state =>
        new Promise(resolve => setTimeout(() => resolve(state), 4000)).then(
            () => setLocalState(state)
        );

    return [getAsync, setAsync];
};

export default useAsyncState;

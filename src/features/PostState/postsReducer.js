const postsReducer = (state, action) => {
    if (action.type === 'FETCH_POSTS_INIT') {
        return {
            ...state,
            isLoading: true,
        };
    }
    if (action.type === 'FETCH_POSTS_SUCCESSFUL') {
        return {
            ...state,
            isLoading: false,
            posts: action.payload.posts,
            sortDirection: action.payload.sortDirection,
            searchTerm: action.payload.searchTerm,
        };
    }
};

export default postsReducer;

const postsReducer = (state, action) => {
    if (action.type === 'FETCH_POSTS_INIT') {
        return {
            ...state,
            isLoading: true,
            posts: [],
        };
    }
    if (action.type === 'ADD_PAGE_OF_POSTS') {
        const posts = [...state.posts, ...action.payload.newPosts];
        return {
            ...state,
            isLoading: false,
            posts,
            filteredPosts: posts,
            sortDirection: action.payload.sortDirection,
            searchTerm: action.payload.searchTerm,
        };
    }
    if (action.type === 'END_PAGINATION') {
        return {
            ...state,
            pagesLeftToLoad: false,
        };
    }
    throw `No matching reducer action found ${action.type}`;
};

export default postsReducer;

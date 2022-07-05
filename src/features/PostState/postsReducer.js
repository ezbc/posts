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
            filteredPosts: action.payload.posts,
        };
    }
    if (action.type === 'ADD_PAGE_OF_POSTS') {
        const posts = [...state.posts, ...action.payload.newPosts];
        return {
            ...state,
            isLoading: false,
            posts,
            filteredPosts: posts,
        };
    }
    if (action.type === 'END_PAGINATION') {
        return {
            ...state,
            pagesLeftToLoad: false,
        };
    }
    if (action.type == 'FILTER_POSTS_SUCCESSFUL') {
        return {
            ...state,
            filteredPosts: action.payload.filteredPosts,
        };
    }

    throw `No matching reducer action found ${action.type}`;
};

export default postsReducer;

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
    if (action.type === 'ADD_POST') {
        const newPosts = [...state.posts, action.payload.newPost];
        return {
            ...state,
            isLoading: false,
            posts: newPosts,
        };
    }
    if (action.type == 'FILTER_POSTS_SUCCESSFUL') {
        return {
            ...state,
            filteredPosts: action.payload.filteredPosts,
        };
    }
};

export default postsReducer;

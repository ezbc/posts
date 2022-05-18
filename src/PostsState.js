const postsReducer = (state, action) => {
    if (action.type === 'FETCH_POSTS_SUCCESSFUL') {
        return {
            ...state,
            isLoading: false,
            posts: action.payload.posts,
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
    if (action.type == 'FILTER_POSTS') {
        const filteredPosts = state.posts.filter(post => {
            const lowerCaseSearchText = action.payload.searchTerm.toLowerCase();
            return (
                post.username.toLowerCase().includes(lowerCaseSearchText) ||
                post.content.toLowerCase().includes(lowerCaseSearchText)
            );
        });
        return {
            ...state,
            filteredPosts: filteredPosts,
        };
    }
};

export default postsReducer;

import { createContext, useContext, useEffect, useReducer } from 'react';
import postsReducer from './postsReducer';
import airtableApi from 'features/api/airtable';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    const [{ posts, isLoading }, postsDispatcher] = useReducer(postsReducer, {
        posts: [],
        isLoading: false,
        sortDirection: 'asc',
        searchTerm: '',
    });

    const fetchPosts = queryParams => {
        postsDispatcher({ type: 'FETCH_POSTS_INIT' });
        airtableApi
            .retrievePosts({
                sortDirection: queryParams?.sortDirection,
                searchTerm: queryParams?.searchTerm,
            })
            .firstPage((err, records) =>
                postsDispatcher({
                    type: 'FETCH_POSTS_SUCCESSFUL',
                    payload: {
                        posts: records.map(records => records.fields),
                        sortDirection: queryParams?.sortDirection,
                        searchTerm: queryParams?.searchTerm,
                    },
                })
            );
    };

    useEffect(fetchPosts, []);

    const createPost = newPost => {
        airtableApi.createPost(newPost);
        fetchPosts();
    };

    return (
        <PostsContext.Provider
            value={{
                createPost,
                fetchPosts,
                posts,
                isLoading,
            }}
        >
            {children}
        </PostsContext.Provider>
    );
};

const usePosts = () => useContext(PostsContext);

export default usePosts;

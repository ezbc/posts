import { createContext, useContext, useEffect, useReducer } from 'react';
import postsReducer from './postsReducer';
import airtableApi from 'features/api/airtable';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    const [{ posts, isLoading, filteredPosts }, postsDispatcher] = useReducer(
        postsReducer,
        {
            posts: [],
            isLoading: false,
            filteredPosts: [],
        }
    );

    const refreshPosts = () => {
        postsDispatcher({ type: 'FETCH_POSTS_INIT' });
        airtableApi.retrievePosts().firstPage((err, records) =>
            postsDispatcher({
                type: 'FETCH_POSTS_SUCCESSFUL',
                payload: {
                    posts: records.map(records => records.fields),
                },
            })
        );
    };

    useEffect(refreshPosts, []);

    const handleSearch = searchTerm => {
        airtableApi.search(searchTerm).firstPage((err, records) => {
            const filteredPosts = records.map(record => record.fields);
            postsDispatcher({
                type: 'FILTER_POSTS_SUCCESSFUL',
                payload: { filteredPosts },
            });
        });
    };

    const createPost = newPost => {
        airtableApi.createPost(newPost);
        refreshPosts();
    };

    return (
        <PostsContext.Provider
            value={{
                createPost,
                handleSearch,
                posts,
                isLoading,
                filteredPosts,
            }}
        >
            {children}
        </PostsContext.Provider>
    );
};

const usePosts = () => useContext(PostsContext);

export default usePosts;

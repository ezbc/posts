import { createContext, useContext, useEffect, useReducer } from 'react';
import postsReducer from './postsReducer';
import Airtable from 'airtable';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    const base = new Airtable({
        apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
    }).base(process.env.REACT_APP_AIRTABLE_BASE_ID);

    const [{ posts, isLoading, filteredPosts }, postsDispatcher] = useReducer(
        postsReducer,
        {
            posts: [],
            isLoading: false,
            filteredPosts: [],
        }
    );

    useEffect(() => {
        postsDispatcher({ type: 'FETCH_POSTS_INIT' });
        base('posts')
            .select({ view: 'Grid view' })
            .firstPage((err, records) =>
                postsDispatcher({
                    type: 'FETCH_POSTS_SUCCESSFUL',
                    payload: {
                        posts: records.map(records => records.fields),
                    },
                })
            );
    }, []);

    const handleSearch = searchTerm => {
        base('posts')
            .select({
                view: 'Grid view',
                filterByFormula: `SEARCH('${searchTerm.toLowerCase()}', {content})`,
            })
            .firstPage((err, records) => {
                const filteredPosts = records.map(record => record.fields);
                postsDispatcher({
                    type: 'FILTER_POSTS_SUCCESSFUL',
                    payload: { filteredPosts },
                });
            });
    };

    const createPost = newPost => {
        base('posts').create([
            {
                fields: {
                    username: newPost.username,
                    content: newPost.content,
                },
            },
        ]);
        postsDispatcher({
            type: 'ADD_POST',
            payload: { newPost },
        });
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

import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useRef,
    useState,
} from 'react';
import postsReducer from './postsReducer';
import airtableApi from 'features/api/airtable';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    const retrieveNextPage = useRef();

    const [
        { posts, isLoading, filteredPosts, pagesLeftToLoad },
        postsDispatcher,
    ] = useReducer(postsReducer, {
        posts: [],
        isLoading: false,
        filteredPosts: [],
        pagesLeftToLoad: true,
    });

    const endPagination = () =>
        postsDispatcher({
            type: 'END_PAGINATION',
        });

    const refreshPosts = () => {
        postsDispatcher({ type: 'FETCH_POSTS_INIT' });
        const response = airtableApi.retrievePosts();
        response.eachPage((records, fetchNextPage) => {
            retrieveNextPage.current = fetchNextPage;
            postsDispatcher({
                type: 'ADD_PAGE_OF_POSTS',
                payload: {
                    newPosts: records.map(records => records.fields),
                },
            });
        }, endPagination);
    };

    useEffect(refreshPosts, []);

    const handleSearch = searchTerm => {
        airtableApi.search(searchTerm).eachPage((records, fetchNextPage) => {
            retrieveNextPage.current = fetchNextPage;
            const filteredPosts = records.map(record => record.fields);
            postsDispatcher({
                type: 'FILTER_POSTS_SUCCESSFUL',
                payload: { filteredPosts },
            });
        }, endPagination);
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
                pagesLeftToLoad,
                isLoading,
                filteredPosts,
                loadNextPage: retrieveNextPage.current,
            }}
        >
            {children}
        </PostsContext.Provider>
    );
};

const usePosts = () => useContext(PostsContext);

export default usePosts;

import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useRef,
} from 'react';
import postsReducer from './postsReducer';
import airtableApi from 'features/api/airtable';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    const retrieveNextPage = useRef();
    const [{ posts, isLoading, pagesLeftToLoad }, postsDispatcher] = useReducer(
        postsReducer,
        {
            posts: [],
            isLoading: false,
            sortDirection: 'asc',
            searchTerm: '',
            pagesLeftToLoad: true,
        }
    );
    const endPagination = () =>
        postsDispatcher({
            type: 'END_PAGINATION',
        });

    const fetchPosts = queryParams => {
        postsDispatcher({ type: 'FETCH_POSTS_INIT' });
        airtableApi
            .retrievePosts({
                sortDirection: queryParams?.sortDirection,
                searchTerm: queryParams?.searchTerm,
            })
            .eachPage((records, fetchNextPage) => {
                retrieveNextPage.current = fetchNextPage;
                postsDispatcher({
                    type: 'ADD_PAGE_OF_POSTS',
                    payload: {
                        newPosts: records.map(records => records.fields),
                        sortDirection: queryParams?.sortDirection,
                        searchTerm: queryParams?.searchTerm,
                    },
                });
            }, endPagination);
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
                pagesLeftToLoad,
                loadNextPage: retrieveNextPage.current,
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

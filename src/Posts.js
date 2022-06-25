import { useCallback, useMemo, useEffect, useReducer } from 'react';
import Airtable from 'airtable';
import styled from 'styled-components';
import AddPost from './AddPost';
import Search from './Search';
import Post from './Post';
import postsReducer from './PostsState';
import Header from './Header';
import theme from './theme';

const base = new Airtable({
    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base(process.env.REACT_APP_AIRTABLE_BASE_ID);

const Posts = ({ className }) => {
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

    return (
        <div className={className}>
            <Header></Header>
            <AddPost
                handleAddPost={newPost => {
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
                }}
            />
            <Search availablePosts={posts} handleSearch={handleSearch} />
            <div>
                {isLoading ? (
                    <p>Is Loading</p>
                ) : (
                    <div className="posts">
                        {filteredPosts.map((post, index) => (
                            <Post
                                username={post.username}
                                content={post.content}
                                key={index}
                            ></Post>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default styled(Posts)`
    padding: 1em;
    > * {
        margin-bottom: 1em;
    }

    ${AddPost} {
        margin-left: 1em;
        padding: 1em;
        margin-bottom: 3em;
    }

    .posts {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;

        ${Post} {
            margin: 1em;
        }
    }
`;

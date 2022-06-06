import { useEffect, useReducer } from 'react';
import AddPost from './AddPost';
import Search from './Search';
import Post from './Post';
import postsReducer from './PostsState';
import Airtable from 'airtable';
import Header from './Header';

const base = new Airtable({
    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base(process.env.REACT_APP_AIRTABLE_BASE_ID);

const Posts = () => {
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

    return (
        <div style={{ padding: '16px' }}>
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
            <h2>Posts</h2>
            <Search
                availablePosts={posts}
                handleSearch={searchTerm => {
                    base('posts')
                        .select({
                            view: 'Grid view',
                            filterByFormula: `SEARCH('${searchTerm.toLowerCase()}', {content})`,
                        })
                        .firstPage((err, records) => {
                            const filteredPosts = records.map(
                                record => record.fields
                            );
                            postsDispatcher({
                                type: 'FILTER_POSTS_SUCCESSFUL',
                                payload: { filteredPosts },
                            });
                        });
                }}
                style={{ marginTop: '16px' }}
            />
            <div style={{ height: '300px', maxWidth: '600px' }}>
                {isLoading ? (
                    <p>Is Loading</p>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'vertical' }}>
                        {filteredPosts.map(post => (
                            <Post
                                username={post.username}
                                content={post.content}
                                key={post.key}
                            ></Post>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Posts;

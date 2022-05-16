import { useEffect, useState } from 'react';
import AddPost from './AddPost';
import Search from './Search';
import Post from './Post';

const useSemiPersistentState = (key, initialState) => {
    const item = localStorage.getItem(key);
    const [state, setState] = useState(
        !!item ? JSON.parse(item) : initialState
    );
    useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [state]);

    return [state, setState];
};

const useAsyncState = (key, initialState) => {
    const item = JSON.parse(localStorage.getItem(key)) || initialState;
    const getAsync = new Promise(resolve =>
        setTimeout(() => resolve(item), 2000)
    );

    const setLocalState = state =>
        localStorage.setItem(key, JSON.stringify(state));

    const setAsync = state =>
        new Promise(resolve => setTimeout(() => resolve(state), 4000)).then(
            () => setLocalState(state)
        );

    return [getAsync, setAsync];
};

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [getPostsAsync, savePostsAsync] = useAsyncState('posts', posts);

    useEffect(() => {
        getPostsAsync.then(posts => {
            setPosts(posts);
        });
    }, []);

    const [filteredPosts, setFilteredPosts] = useState(posts);

    return (
        <div style={{ padding: '16px' }}>
            <h2>Topics covered</h2>
            <ol>
                <li>Lifting State</li>
                <li>Props handling</li>
                <li>Hooks</li>
                <li>Fragments</li>
                <li>Imperative React</li>
                <li>Async data</li>
                <li>Conditional React</li>
                <li>Reducers</li>
            </ol>
            <h2>Options for next steps</h2>
            <ol>
                <li>Add async behavior to search</li>
                <li>Add a loading indicator</li>
                <li>Use reducer to store post and is loading state</li>
                <li></li>
            </ol>
            <AddPost
                handleAddPost={newPost => {
                    const newPosts = [...posts, newPost];
                    setPosts(newPosts);
                    savePostsAsync(newPosts);
                }}
            />

            <h2>Posts</h2>
            <Search
                availablePosts={posts}
                handleFilteredPosts={setFilteredPosts}
                style={{ marginTop: '16px' }}
            />
            <div style={{ display: 'flex', flexDirection: 'vertical' }}>
                {filteredPosts.map(post => (
                    <Post
                        username={post.username}
                        content={post.content}
                        key={post.key}
                    ></Post>
                ))}
            </div>
        </div>
    );
};

export default Posts;

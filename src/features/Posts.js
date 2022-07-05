import styled from 'styled-components';
import AddPost from 'features/AddPost';
import Search from 'features/Search';
import Post from 'features/Post';
import Header from 'features/Header';
import Sort from 'features/Sort';
import usePosts, { PostsProvider } from 'features/PostState/usePosts';
import LoadMore from './LoadMore';

const Posts = styled(({ className }) => {
    const { isLoading, posts } = usePosts();

    return (
        <div className={className}>
            <Header></Header>
            <AddPost />
            <Search />
            <Sort />
            <div>
                {isLoading ? (
                    <p>Is Loading</p>
                ) : (
                    <div className="posts">
                        {posts.map((post, index) => (
                            <Post
                                username={post.username}
                                content={post.content}
                                key={index}
                            ></Post>
                        ))}
                    </div>
                )}
            </div>
            <LoadMore />
        </div>
    );
})`
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

const PostsWithContext = ({ className }) => (
    <PostsProvider className={className}>
        <Posts />
    </PostsProvider>
);

export default PostsWithContext;

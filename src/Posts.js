import styled from 'styled-components';
import AddPost from './AddPost';
import Search from './Search';
import Post from './Post';
import Header from './Header';
import usePosts, { PostsProvider } from './usePosts';

const Posts = styled(({ className }) => {
    const { posts, isLoading, filteredPosts, createPost, handleSearch } =
        usePosts();

    return (
        <div className={className}>
            <Header></Header>
            <AddPost handleAddPost={createPost} />
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

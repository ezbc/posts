
function Post({ username, content }) {
    return (
        <div
            className="post"
            style={{
                margin: '10px',
                border: `3px solid black`,
                borderRadius: '5px',
                padding: '10px',
                width: '200px',
            }}
        >
            <h3>{username}</h3>
            <p>{content}</p>
        </div>
    );
}

export default Post;
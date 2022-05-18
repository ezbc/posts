import { useState } from 'react';
const AddPost = ({ handleAddPost }) => {
    const [username, setUsername] = useState('');
    const [content, setContent] = useState('');

    const onChangeUsername = event => {
        setUsername(event.target.value);
    };
    const onChangeContent = event => {
        setContent(event.target.value);
    };

    return (
        <div style={{ maxWidth: '400px' }}>
            <h2>Add Post</h2>
            <form
                id="filter-text"
                onSubmit={event => {
                    event.preventDefault();
                    handleAddPost({
                        username,
                        content,
                        key: Date.now(),
                    });

                    setUsername('');
                    setContent('');
                }}
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    value={username}
                    onChange={onChangeUsername}
                ></input>
                <label htmlFor="content">content</label>
                <input
                    id="content"
                    value={content}
                    onChange={onChangeContent}
                ></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddPost;

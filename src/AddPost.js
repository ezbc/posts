import { useState } from 'react';
import styled from 'styled-components';
import Button from './ui/Button';

const Title = styled.h2`
    font-size: 16px;
`;

const AddPost = ({ handleAddPost, className }) => {
    const [username, setUsername] = useState('');
    const [content, setContent] = useState('');

    const onChangeUsername = event => {
        setUsername(event.target.value);
    };
    const onChangeContent = event => {
        setContent(event.target.value);
    };

    return (
        <div className={className} style={{ maxWidth: '400px' }}>
            <Title>Add Post</Title>
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
            >
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        value={username}
                        onChange={onChangeUsername}
                    ></input>
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <input
                        id="content"
                        value={content}
                        onChange={onChangeContent}
                    ></input>
                </div>
                <Button type="submit">Add</Button>
            </form>
        </div>
    );
};

export default styled(AddPost)`
    form {
        div {
            margin-bottom: 0.5em;
        }
        div > * {
            margin-right: 0.5em;
        }
    }
`;

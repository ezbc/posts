import { useState } from 'react';
import styled from 'styled-components';
import theme from './theme';

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

export default styled(AddPost)`
    button {
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.primary};
    }
`;

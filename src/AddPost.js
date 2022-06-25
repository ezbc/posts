import { useState } from 'react';
import styled from 'styled-components';
import Button from './ui/Button';
import Card from './ui/layouts/Card';

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
            <Card.Title>Add Post</Card.Title>
            <Card.Text>
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
            </Card.Text>
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

import styled from 'styled-components';
import Card, { Title, Text } from 'ui/layouts/Card';

function Post({ username, content, className }) {
    return (
        <Card className={className}>
            <Card.Title>{username}</Card.Title>
            <Card.Text>{content}</Card.Text>
        </Card>
    );
}

export default styled(Post)``;

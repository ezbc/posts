import styled from 'styled-components';
import { colors } from './theme';
function Post({ username, content, className }) {
    return (
        <div className={className}>
            <h3>{username}</h3>
            <p>{content}</p>
        </div>
    );
}

export default styled(Post)`
    border: 2px solid ${colors.darkStrong};
    border-radius: 4px;
    width: 12em;
    padding: 1em;
`;

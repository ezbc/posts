import styled from 'styled-components';
import { colors } from '../../theme';

const Title = styled.h3`
    font-size: 1.2em;
`;

const Text = styled.p`
    font-size: 1em;
`;

const Card = ({ children, className }) => {
    return <div className={className}>{children}</div>;
};

Card.Title = Title;
Card.Text = Text;

export { Title, Text };

export default styled(Card)`
    border: 2px solid ${colors.darkStrong};
    border-radius: 4px;
    width: 12em;
    padding: 1em;
`;

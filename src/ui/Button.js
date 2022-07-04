import styled from 'styled-components';
import theme from 'theme';

const Button = props => <button {...props} />;

export default styled(Button)`
    background-color: ${theme.elements.button.background.color};
    color: ${theme.elements.button.text.color};
    font-weight: ${theme.elements.button.text.weight};
    border-radius: 6px;
`;

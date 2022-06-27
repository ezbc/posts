import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Home } from '../icons/home.svg';

const Header = ({ className }) => {
    return (
        <div className={className}>
            <Link to="/">
                <Home width="24px" height="24px" />
            </Link>
            <Link to="/activities">Activities</Link>
        </div>
    );
};

export default styled(Header)`
    > * {
        margin-right: 1em;
    }
`;

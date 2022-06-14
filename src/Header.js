import { Link } from 'react-router-dom';
import { ReactComponent as Home } from './icons/home.svg';

const Header = () => {
    // links to activities and home page
    return (
        <>
            <Link to="/">
                <Home width="16px" height="16px" />
            </Link>
            <Link to="/activities">Activies</Link>
        </>
    );
};

export default Header;

import { Link } from 'react-router-dom';

const Header = () => {
    // links to activities and home page
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/activities">Activies</Link>
        </>
    );
};

export default Header;

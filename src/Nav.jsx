import './scss/components/_nav.scss';
import {Link} from "react-router-dom";
const Nav = (props) => {
    return (
        <nav className="main-nav">
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/projects">projects</Link></li>
                <li><Link to="/services">services</Link></li>
                <li><Link to="/blog">blog</Link></li>
                <li><Link to="/contact">contact</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;

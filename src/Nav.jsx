import './scss/components/_nav.scss';
import {NavLink} from "react-router-dom";
const Nav = (props) => {
    return (
        <nav className="main-nav">
            <ul className="main-nav__list">
                <li><NavLink exact to="/" activeClassName="active" end className="main-nav__link">home</NavLink></li>
                <li><NavLink exact to="/projects" activeClassName="active" className="main-nav__link">projects</NavLink></li>
                <li><NavLink exact to="/services" activeClassName="active" className="main-nav__link">services</NavLink></li>
                <li><NavLink exact to="/bitsnbobs" activeClassName="active" className="main-nav__link">bits n bobs</NavLink></li>
                <li><NavLink exact to="/contact" activeClassName="active" className="main-nav__link">contact</NavLink></li>
            </ul>
        </nav>
    );
};

export default Nav;

import './scss/components/_nav.scss';
import {NavLink} from "react-router-dom";
const Nav = (props) => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink exact to="/" activeClassName="active" end>home</NavLink></li>
                <li><NavLink exact to="/projects" activeClassName="active">projects</NavLink></li>
                <li><NavLink exact to="/services" activeClassName="active">services</NavLink></li>
                <li><NavLink exact to="/bitsnbobs" activeClassName="active">bits n bobs</NavLink></li>
                <li><NavLink exact to="/contact" activeClassName="active">contact</NavLink></li>
            </ul>
        </nav>
    );
};

export default Nav;

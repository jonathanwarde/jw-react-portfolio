import './scss/components/_nav.scss';
const Nav = (props) => {
    return (
        <nav className="main-nav">
            <ul>
                <li><a href="">home</a></li>
                <li><a href="">projects</a></li>
                <li><a href="">services</a></li>
                <li><a href="">blog</a></li>
                <li><a href="">contact</a></li>
            </ul>
        </nav>
    );
};

export default Nav;

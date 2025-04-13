import './scss/global.scss';
import './scss/_header.scss';
import { createRoot } from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Project from "./Project";
import Nav from "./Nav";
import HeroImg from "./HeroImg";
import Home from "./pages/Home";
import HomeSide from "./HomeSide";
import Projects from "./pages/Projects";
import ProjectsSide from "./ProjectsSide";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogSingle from "./pages/BlogSingle";
import BlogsByCat from "./pages/BlogsByCat";
import GetBlogCategories from "./GetBlogCategories";
import Contact from "./pages/Contact";
import DarkModeSwitch from "./DarkModeSwitch";
import NavEffects from "./NavEffects";
import ChannelLinks from './ChannelLinks';
import CVLink from './CVLink';

const App = () => {
    return (
        <BrowserRouter>
        <NavEffects />
        <div className="content-grid">
            <header>
                <DarkModeSwitch />
                <CVLink />
                <div>
                    <Nav />
                    <h1>Full stack (Front End focussed) Web Developer</h1>
                    <p><em>Web Performance | Accessibility | UX | Technical SEO</em></p>
                </div>
                <HeroImg />
            </header>
            <div className="flex-layout">
                <main className="wysiwyg">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/bitsnbobs" element={<Blog />} />
                        <Route path="/bitsnbobs/:slug" element={<BlogSingle />} />
                        <Route path="/bitsnbobs/category/:id" element={<BlogsByCat />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <aside>
                    <div className="section">
                        <div className="margin-bottom">
                            <h2 className="h3">Jonathan Warde</h2>
                            <ChannelLinks className="body-links"/>
                        </div>
                        <div>
                            <Routes>
                                <Route path="/" element={<ProjectsSide />} />
                            </Routes>
                        </div>
                    </div>
                    <div className="section">
                        <h2 className="h3">Blog</h2>
                        <p><strong>Browse by category</strong></p>
                        <GetBlogCategories />
                    </div>
                </aside>
            </div>
        </div>
            <footer className="content-grid">
                <div className="footer-content">
                <p>© 2025 Jonathan Warde</p>
                <ChannelLinks className="footer-links" />
                </div>
            </footer>
        </BrowserRouter>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

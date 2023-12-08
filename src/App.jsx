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
import Contact from "./pages/Contact";
import DarkModeSwitch from "./DarkModeSwitch";

const App = () => {
    return (
        <BrowserRouter>
        <div className="content-grid">
            <header>
                <DarkModeSwitch />
                <div>
                    <Nav />
                    <h1>Full stack (front end focussed) web developer</h1>
                    <p>Jonathan Warde</p>
                </div>
                <HeroImg />
            </header>
            <div className="flex-layout">
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <aside>
                    <div className="section">
                        <div>
                            <h2>Jonathan Warde</h2>
                            <p></p>
                            <ul>
                                <li>
                                    <a href='mailto:jonwarde@gmail.com'>
                                        <span>email: </span>jonwarde@gmail.com</a>
                                </li>
                                <li>
                                    <a href='https://linkedin.com/jonwarde'>
                                        <span>linkedin: </span>linkedin/jonwarde</a>
                                </li>
                                <li>
                                    <a href='https://github.com/jonathanwarde'>
                                        <span>github: </span>github.com/jonathanwarde</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Routes>
                                <Route path="/" element={<HomeSide />} />
                                <Route path="/projects" element={<ProjectsSide />} />
                            </Routes>
                        </div>
                    </div>
                    <div className="section">
                        <h2>Blog</h2>
                        recent posts here
                        categories here
                    </div>
                </aside>
            </div>
        </div>
        </BrowserRouter>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

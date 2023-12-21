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
import GetBlogCategories from "./GetBlogCategories";
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
                    <h1>Full stack (Front End focussed) Web Developer</h1>
                    <p><em>I build sites and features for the web</em></p>
                </div>
                <HeroImg />
            </header>
            <div className="flex-layout">
                <main className="wysiwyg">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:slug" element={<BlogSingle />} /> 
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <aside>
                    <div className="section">
                        <div className="margin-bottom">
                            <h2 className="h3">Jonathan Warde</h2>
                            <p></p>
                            <ul>
                                <li>
                                    <a href='mailto:jonwarde@gmail.com' className="social">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                                            <path fill="currentColor"  d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/></svg>
                                        <span>jonwarde@gmail.com</span></a>
                                </li>
                                <li>
                                    <a href='https://www.linkedin.com/in/jonwarde/' className="social">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" width="1000mm" height="1000mm" viewBox="0 0 1000 1000">
                                            <path fill="currentColor"  d=" M 336 332C 336 332 336 789 336 789C 336 789 211 789 211 789C 211 789 211 332 211 332C 211 332 336 332 336 332M 346 206C 346 206 346 206 346 206C 346 247 313 280 273 280C 233 280 201 247 201 206C 201 166 233 133 273 133C 313 133 346 166 346 206M 834 508C 834 508 834 789 834 789C 834 789 709 789 709 789C 709 789 709 556 709 556C 709 416 543 427 543 556C 543 556 543 789 543 789C 543 789 419 789 419 789C 419 789 419 332 419 332C 419 332 543 332 543 332C 543 332 543 406 543 406C 601 298 834 290 834 508" transform="">
                                            </path>
                                        </svg>
                                        <span>linkedin.com/in/jonwarde/</span></a>
                                </li>
                                <li>
                                    <a href='https://github.com/jonathanwarde' className="social">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" width="1000mm" height="1000mm" viewBox="0 0 1000 1000">
                                            <path fill="currentColor" d=" M 500 0C 500 0 500 0 500 0C 776 0 1000 224 1000 500C 1000 720 857 908 659 974C 634 979 625 963 625 950C 625 933 626 879 626 813C 626 766 610 736 592 720C 703 708 820 665 820 473C 820 418 801 374 769 339C 774 327 791 275 764 207C 764 207 722 193 626 258C 586 247 544 241 501 241C 459 241 416 247 376 258C 281 194 239 207 239 207C 211 275 229 327 234 339C 202 374 183 419 183 473C 183 665 299 708 410 720C 396 733 383 755 378 787C 349 800 278 821 233 746C 223 731 195 694 156 695C 114 695 139 718 156 728C 178 740 202 784 208 798C 218 826 250 880 376 857C 376 899 376 938 376 950C 376 963 367 978 342 974C 143 908 0 721 0 500C 0 224 224 0 500 0" transform="">
                                            </path>
                                        </svg>
                                        <span>github.com/jonathanwarde</span></a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Routes>
                                <Route path="/projects" element={<HomeSide />} />
                                <Route path="/" element={<ProjectsSide />} />
                            </Routes>
                        </div>
                    </div>
                    <div className="section">
                        <h2 className="h3">Blog</h2>
                        <p><strong>Browse by tag</strong></p>
                        <GetBlogCategories />
                    </div>
                </aside>
            </div>
        </div>
            <footer className="content-grid">
                <p>© 2024 Jonathan Warde</p>
            </footer>
        </BrowserRouter>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

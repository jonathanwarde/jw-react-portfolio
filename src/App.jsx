import './scss/global.scss';
import './scss/_header.scss';
import { createRoot } from "react-dom/client";
import Project from "./Project";
import Nav from "./Nav";
import DarkModeSwitch from "./DarkModeSwitch";

const App = () => {
    return (
        <div className="content-grid">
            <header>
                <DarkModeSwitch />
                <div>
                    <Nav />
                    <h1>Full stack (front end focussed) web developer</h1>
                    <p>Jonathan Warde</p>
                </div>
                <img src="img/jonwarde.png" alt="Jonathan Warde" className="hero-img" />
            </header>
            <div className="flex-layout">
                <main>
                    <p><em>I make websites</em></p>
                    <p>I design and build websites with a focus on standards, performance, and accessibility. With a decade of professional experience — in-house and remote — I've delivered for everyone. Whether it's PWAs, WordPress, or full-stack frameworks, I have the know-how to help.</p>
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
                            <h2>Projects</h2>
                            <Project name="Spinnup" description="Multi-region marketing site for Universal Music Group distribution service" />
                            <Project name="Top Secret Comedy Club" description="Website and Vue.js events management app for UK's top rated comedy cub" />
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
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

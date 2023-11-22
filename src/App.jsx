import { createRoot } from "react-dom/client";
import Project from "./Project";

const App = () => {
    return (
        <div>
            <h1>Jonathan Warde</h1>
            <p>Web developer</p>
            <Project name="Top Secret Comedy Club" description="Marketing site and Vue.js events management app for UK's top rated comedy cub" />
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

import Project from "./Project";

const ProjectSide = (props) => {
    return (
        <div>
            <h2 className="h3">Projects</h2>
            <Project name="Miller Insurance" description="Global insurance and brokering company (7Dots agency)" img="./img/miller.webp" link="https://www.miller-insurance.com" tags={["dev lead","php","JS", "webpack"]} />
            <Project name="Spinnup" description="Multi-region marketing site for Universal Music Group distribution service (freelance)" img="./img/spinnup.webp" link="https://spinnup.com" tags={["dev lead","WordPress","JS", "Grunt"]} />
            <Project name="Top Secret Comedy Club" description="Website and Vue.js events management app for UK's top rated comedy cub" img="./img/topsecret.webp" link="https://thetopsecretcomedyclub.co.uk" tags={["dev lead","React","Vue.js"]} />
        </div>
    );
};

export default ProjectSide;

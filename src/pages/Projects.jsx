import Project from "../Project";

const Projects = (props) => {
    return (
        <div>
            <h2>Projects</h2>
            <Project name="Spinnup" description="Multi-region marketing site for Universal Music Group distribution service" img="./img/spinnup.png" link="https://spinnup.com" />
            <Project name="Top Secret Comedy Club" description="Website and Vue.js events management app for UK's top rated comedy cub" img="./img/tscc.png" link="https://thetopsecretcomedyclub.co.uk" />
            <Project name="Perform Rights" description="Marketig site for the global artist royalty collection service" img="./img/perform.png" link="https://www.performrights.com/" />

        </div>
    );
};

export default Projects;

import Project from "./Project";

const ProjectSide = (props) => {
    return (
        <div>
            <h2 className="h3">Projects</h2>
            <Project name="Spinnup" description="Multi-region marketing site for Universal Music Group distribution service" img="./img/spinnup.png" link="https://spinnup.com" />
            <Project name="Top Secret Comedy Club" description="Website and Vue.js events management app for UK's top rated comedy cub" img="./img/tscc.png" link="https://thetopsecretcomedyclub.co.uk" />
        </div>
    );
};

export default ProjectSide;

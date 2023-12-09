import Project from "../Project";

const Projects = (props) => {
    return (
        <div>
            <h2 className="h3">Projects</h2>
            <Project name="Spinnup" description="Multi-region marketing site for Universal Music Group distribution service" img="./img/spinnup.png" link="https://spinnup.com" />
            <Project name="Top Secret Comedy Club" description="Website and Vue.js events management app for UK's top rated comedy cub" img="./img/tscc.png" link="https://thetopsecretcomedyclub.co.uk" />
            <Project name="Perform Rights" description="Marketing site for the global artist royalty collection service" img="./img/perform.png" link="https://www.performrights.com/" />
            <Project name="Imperial College London" description="In-house lead Front End for enterprise level university site" img="./img/imperial.png" link="https://www.imperial.ac.uk/" />
            <Project name="Acrospire" description="WordPress site for leading lighting manufacturer (agency - 7Dots)" img="./img/acrospire.png" link="https://acrospire.co/" />
            <Project name="Inchcape" description="WordPress multisite for global car dealership (agency - 7Dots)" img="./img/inchcape.png" link="https://inchcape.com/" />
            <Project name="Blaze Communication" description="Agency site design and build (agency - Blaze Communication)" img="./img/blaze.png" link="https://blazecommunication.com/" />

        </div>
    );
};

export default Projects;

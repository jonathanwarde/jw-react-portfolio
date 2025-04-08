import Project from "../Project";

const Projects = (props) => {
    return (
        <div>
            <h2 className="h3">Projects</h2>
            <Project name="Miller Insurance" description="Global insurance and brokering company (7Dots agency)" img="./img/miller.webp" link="https://www.miller-insurance.com" />
            <Project name="Fairview Homes" description="Property developers - London (7Dots agency)" img="./img/fairview.webp" link="https://fairview.co.uk" />
            <Project name="Coca cola" description="European site for coca cola (7Dots agency)" img="./img/coke.webp" link="https://www.cocacolaep.com/" />
            <Project name="Pegasus Homes" description="UK retirement homes (7Dots agency)" img="./img/pegasus.webp" link="https://www.pegasushomes.co.uk/" />
            <Project name="Nelsons" description="Global healthcare products (7Dots agency)" img="./img/nelsons.webp" link="https://www.nelsons.com/" />
            <Project name="Spinnup" description="Multi-region marketing site for Universal Music Group distribution service (freelance)" img="./img/spinnup.webp" link="https://spinnup.com" />
            <Project name="Top Secret Comedy Club" description="Website and Vue.js events management app for UK's top rated comedy cub" img="./img/topsecret.webp" link="https://thetopsecretcomedyclub.co.uk" />
            <Project name="Wine Investment" description="Wine investment company (7Dots agency)" img="./img/wineinvestment.webp" link="https://www.wineinvestment.com/" />
            <Project name="Perform Rights" description="Marketing site for the global artist royalty collection service" img="./img/performrights.webp" link="https://www.performrights.com/" />
            <Project name="Imperial College London" description="In-house lead Front End for enterprise level university site" img="./img/imperial.webp" link="https://www.imperial.ac.uk/" />
            <Project name="Acrospire" description="WordPress site for leading lighting manufacturer (agency - 7Dots)" img="./img/acrospire.webp" link="https://acrospire.co/" />
            <Project name="Inchcape" description="WordPress multisite for global car dealership (agency - 7Dots)" img="./img/inchcape.webp" link="https://inchcape.com/" />
            <Project name="Blaze Communication" description="Agency site design and build (agency - Blaze Communication)" img="./img/blaze.webp" link="https://blazecommunication.com/" />

        </div>
    );
};

export default Projects;

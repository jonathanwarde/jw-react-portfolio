import './scss/components/_project-card.scss';
const Project = (props) => {
    return (
        <div className="card project">
            <div className="project__inner">
                <div className="project__img">
                    <img src={props.img} />
                </div>
                    <div className="project__info">
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                    <a href={props.link} target='_blank'>view</a>
                </div>
            </div>
        </div>
    );
};

export default Project;

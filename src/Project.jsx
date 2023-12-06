const Project = (props) => {
    return (
        <div>
            <img src={props.img} />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <a href={props.link} target='_blank'>view</a>
        </div>
    );
};

export default Project;

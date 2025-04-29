import './scss/components/_project-card.scss';
import { Link } from "react-router-dom";  
const Project = (props) => {

    const tags = props.tags || [];
    //<Link to={`/project/${props.name.toLowerCase().replace(/ /g, '-')}`} className="details-icon">details</Link>
    return (
        <div className="card project">
            <div className="project__inner">
                <div className="project__img">
                    <img src={props.img} />
                </div>
                    <div className="project__info">
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                    {tags.length > 0 && (
                        <ul>
                        {tags.map((tag) => (
                            <li>
                            <small className="chip">{tag}</small>
                            </li>
                        ))}
                        </ul>
                    )}
                    <a href={props.link} target='_blank' className="view-icon">view site</a>
                </div>
            </div>
        </div>
    );
};

export default Project;

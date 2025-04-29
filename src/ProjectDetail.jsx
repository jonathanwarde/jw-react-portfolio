import { useParams } from "react-router-dom";

const ProjectDetail = () => {
    const { title } = useParams();  // Get the title from the URL

    console.log('HERE', title)

    //TODO: fetch projects custom post type by title 

    // Example project data - in a real scenario, this data might come from an API or external file
    const projects = [
        {
            title: "miller-insurance",
            description: "Global insurance and brokering company (7Dots agency)",
            img: "./img/miller.webp"
        },
        {
            title: "another-project",
            description: "Another great project with amazing results.",
            img: "./img/another-project.webp"
        }
        // Add more projects here
    ];

    // Find the project by title
    const project = projects.find(p => p.title === title);

    // If no project found, show an error message
    if (!project) {
        return <div>Project not found!</div>;
    }

    return (
        <div className="project-detail">
            <h1>{project.title}</h1>
            <img src={project.img} alt={project.title} />
            <p>{project.description}</p>
        </div>
    );
};

export default ProjectDetail;

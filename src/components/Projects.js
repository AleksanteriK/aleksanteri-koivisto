import '../App.css';

function Projects({id}) {
    const projects = [
        {
            title: "3D Checkers",
            image: "https://github.com/AleksanteriK/Checkers3D/blob/master/Screenshots/freecamera.png?raw=true",
            link: "https://github.com/AleksanteriK/Checkers3D",
            description: "A 3D player vs player game of checkers I made with Unity Game Engine"
        },
        {
            title: "Budgeting App",
            image: "https://github.com/AleksanteriK/Budget6000/blob/main/screenshots/view.png?raw=true",
            link: "https://github.com/AleksanteriK/Budget6000",
            description: "This project was a gradable assignment for a university course. We worked in a group of 4 and my responsibilities was mostly implementing the backend with .NET and MongoDB Cloud"
        }
      ];      

    return (
    <div className="Fourth-page" id={id}>
        <section>
            <header className="Maincontent">
                <h2>My Other Works</h2>
                <p></p>
                <div className="projects">
                    {projects.map((project) => (
                    <a
                    key={project.title}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card"
                    >
                        <div className="project-image-wrapper">
                            <img src={project.image} alt={project.title} className="project-image" />
                        </div>
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-description">{project.description}</span>
                    </a>
                    ))}
                </div>
            </header>
        </section>
    </div>
    );
}

export default Projects;
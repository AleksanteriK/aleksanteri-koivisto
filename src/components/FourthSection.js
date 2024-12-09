import '../App.css';

function Fourth({id}) {
    const projects = [
        {
            title: "3D Checkers",
            image: "https://github.com/AleksanteriK/Checkers3D/blob/master/Screenshots/freecamera.png?raw=true",
            link: "https://github.com/AleksanteriK/Checkers3D",
            description: "A 3D player vs player game of checkers I made with Unity Game Engine"
        },

        {
            title: "Hotel Application",
            image: "https://cdn.pixabay.com/photo/2019/09/22/16/20/backend-4496461_960_720.png",
            link: "https://gitlab.com/joonashkra/hotelapp",
            description: "Devops course group project where we utilized Devops tools. Backend was made with ASP.NET and MongoDB, I worked mostly on the backend side"
        },
      ];      

    return (
    <div className="Fourth-page" id={id}>
        <section>
            <header className="Maincontent">
                <h2>My Recent Works</h2>
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

export default Fourth;
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
            title: "Budget 6000",
            image: "https://github.com/AleksanteriK/Budget6000/blob/main/screenshots/view.png?raw=true",
            link: "https://github.com/AleksanteriK/Budget6000",
            description: "A budget calculator specified for finnish students. I worked on this project with a team of 4 people. I was responsible mostly implementing the backend with .NET and MongoDB, but also did some frontend work with React."
        },
        {
            title: "Donuts",
            image: process.env.PUBLIC_URL + '/dontsitv5.png',
            link: process.env.PUBLIC_URL + '/dontsitv5.png',
            description: "Donuts and a plate I made with Blender",
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
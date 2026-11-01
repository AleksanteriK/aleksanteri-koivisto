import '../App.css';

function TechnicalSkills({id}) {
    return (
    <div className='Third-page' id={id}>
      <section>
          <header className="Maincontent">
                <h2>Technical Expertise</h2>
                <p></p>
                <small>I have experience with the following technologies</small>
                <p></p>
                <ul className="languagelist">
                    <p>Languages and frameworks</p>
                    <div className="content-right">
                    <li>
                    <span className="Green"> C# </span> <span> (Unity, ASP.NET)</span>
                    </li>
                    <p></p>
                    <li>
                    <span className="Yellow"> Javascript </span> (<span>React</span>)
                    </li>
                    <p></p>
                    <li>
                    <span className="Blue"> Python </span> (<span>Flask, Scrapy</span>)
                    </li>
                    <p></p>
                    <li>
                    <span className="Orange"> Java</span> (<span>Spring Boot</span>)
                    </li>
                    <p></p>
                    <li>
                    <span className="Grey"> C / C++</span>
                    </li>
                    </div>
                    <p></p>
                    <p>Game Development</p>
                    <li>
                    <span>Unity Game Engine</span>
                    </li>
                    <li>
                    <span>Blender (3D Modeling)</span>
                    </li>
                    <p></p>
                    <p>Other</p>
                    <li>
                    <span>Linux</span>
                    </li>
                    <li>
                    <span>MongoDB Cloud</span>
                    </li>
                    <li>
                    <span>WordPress</span>
                    </li>
                </ul>
            </header>
        </section>
    </div>
    );
}

export default TechnicalSkills;
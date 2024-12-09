import '../App.css';

function Third({id}) {
    return (
    <div className='Third-page' id={id}>
      <section>
          <header className="Maincontent">
                <h2>Technologies I Have Experience With</h2>
                <ul className="languagelist">
                    <p>Languages and frameworks</p>
                    <div className="content-right">
                    <li>
                    <span className="rating"> ★★★★☆ </span>
                    <span className="Green"> C# </span> <span> (Unity, MAUI, ASP.NET)</span>
                    </li>
                    <p></p>
                    <li>
                    <span className="rating"> ★★★☆☆ </span>
                    <span className="Yellow"> Javascript </span> (<span>React</span>)
                    </li>
                    <p></p>
                    <li>
                    <span className="rating"> ★★★☆☆ </span>
                    <span className="Orange"> Java</span>
                    </li>
                    <p></p>
                    <li>
                    <span className="rating"> ★★☆☆☆ </span>
                    <span className="Blue"> Python </span>
                    </li>
                    <p></p>
                    <li>
                    <span className="rating"> ★★☆☆☆ </span>
                    <span className="Grey"> C / C++</span>
                    </li>
                    </div>
                    <p></p>
                    <p>Game Development</p>
                    <li>
                    <span>Unity Game Engine</span>
                    </li>
                    <p></p>
                    <p>Other</p>
                    <li>
                      <span>Linux</span>
                    </li>
                    <li>
                    <span>Docker</span>
                    </li>
                    <li>
                    <span>Gitlab ( CI / CD )</span>
                    </li>
                    <li>MongoDB</li>
                </ul>
            </header>
        </section>
    </div>
    );
}

export default Third;
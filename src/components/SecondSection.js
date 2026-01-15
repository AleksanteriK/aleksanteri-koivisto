import '../App.css';

function Second({id}) {
    return (
    <div className="Second-page" id={id}>
        <section>
            <header className="Maincontent">
                <h2>About Me</h2>
                <p></p>
                <span>My inspiration to learn programming came from video games</span>
                <span>and that has inspired me for many years to constantly learn new skills</span>
                <p></p>
                <p></p>
                <span>I've been always eager to learn how things work "under the hood"</span>
                <p></p>
                <p></p>
                <span>My first touch with programming was as early as around 2010,</span>
                <span>when I tried to learn some BASIC on our old <font color="lightskyblue"> Commodore 64</font></span>
                <p></p>
                <p></p>
                <span>I am currently pursuing my Bachelor's degree in Information Technology at </span>
                <span className="Orange"> Vaasa University of Applied Sciences </span>
                <span> My major is in software engineering and minor is in networking</span>
                <p></p>
            </header>
        </section>
    </div>
    );
}

export default Second;
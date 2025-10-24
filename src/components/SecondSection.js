import '../App.css';

function Second({id}) {
    return (
    <div className="Second-page" id={id}>
        <section>
            <header className="Maincontent">
                <h2>About Me</h2>
                <span>As well as I can remember, I got my inspiration to learn programming from video games.</span>
                <p></p>
                <span>I've been always eager to learn how things work "under the hood".</span>
                <span>I guess my first touch with programming was as early as around 2010,</span>
                <span>when I tried to learn BASIC on our old <font color="lightskyblue"> Commodore 64</font></span>
                <p></p>
                <span>I am currently pursuing my Bachelor's degree in Information Technology at </span>
                <span className="Orange"> Vaasa University of Applied Sciences </span>
                <span> My major is in software engineering and minor is in networking</span>
                <p></p>
                <p>I'm enthusiastic towards gaming and making video games</p>
                <p>I like to take long walks outside and to visit national parks</p>
                <p>I'm interested in diving</p>
                <p>I'm a self-taught guitar player</p>
            </header>
        </section>
    </div>
    );
}

export default Second;
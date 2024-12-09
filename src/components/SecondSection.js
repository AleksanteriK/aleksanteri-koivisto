import '../App.css';

function Second({id}) {
    return (
    <div className="Second-page" id={id}>
        <section>
            <header className="Maincontent">
                <h2>About Me</h2>
                <span>As well as I can remember, I got my inspiration to learn programming from video games. 
                I've been always eager to learn how things work "under the hood". My first touch with programming
                was as early as around 2010, when I tried to learn BASIC on our old <font color="lightskyblue"> Commodore 64</font>
                </span>
                <p></p>
                <span>I am currently pursuing my Bachelor's degree in Information Technology at </span>
                <span className="Orange"> Vaasa University of Applied Sciences </span>
                <span> My major is in software engineering and minor is in networking</span>
                <p></p>
                <p> I'm enthusiastic towards gaming</p>
                <p> I love to take long walks outside and to visit national parks</p>
                <p> Sometimes I grab my guitar and play for myself </p>
            </header>
        </section>
    </div>
    );
}

export default Second;
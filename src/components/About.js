import '../App.css';
import Container from 'react-bootstrap/Container';

function About({id}) {
    return (
    <div className="Second-page" id={id}>
        <section>
            <header className="Maincontent">
                <h2>About Me</h2>
                <Container>
                    <p></p>
                    <span>My inspiration to learn programming came from video games</span>
                    <span> and that has inspired me for many years to constantly learn new skills</span>
                    <p></p>
                    <p></p>
                    <p></p>
                    <span>I've been always eager to learn how things work "under the hood"</span>
                    <p></p>
                    <p></p>
                    <p></p>
                    <span>I completed my Bachelor's degree in Information Technology at</span>
                    <p className="Orange">Vaasa University of Applied Sciences</p>
                    <span>I studied software engineering as a major and networking as a minor</span>
                    <p></p>
                    <p></p>
                    <span>I am also an aspiring and self-taught indie game developer</span>
                    <p></p>
                </Container>
            </header>
        </section>
    </div>
    );
}

export default About;
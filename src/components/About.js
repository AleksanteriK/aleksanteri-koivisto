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
                    <span>I am currently pursuing my Bachelor's degree in Information Technology at</span>
                    <p className="Orange">Vaasa University of Applied Sciences</p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <span> My major is in software engineering and minor is in networking</span>
                    <p></p>
                </Container>
            </header>
        </section>
    </div>
    );
}

export default About;
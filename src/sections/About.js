import '../App.css';
import Container from 'react-bootstrap/Container';

function About({id}) {
    return (
    <div className="Second-page" id={id}>
        <section>
            <header className="Maincontent">
                <h2>About Me</h2>
                <Container>
                    <span>I am an indie game developer and IT professional</span>
                    <p></p>
                    <span>My inspiration to learn programming came from video games</span>
                    <span> and that has inspired me for many years to constantly learn new skills. </span>
                    <span> I've been always eager to learn how things work "under the hood"</span>
                    <p></p>
                    <span>I have a bachelor's degree in information technology, I studied software engineering and networking in </span>
                    <span>Vaasa University of Applied Sciences</span>
                    <p></p>
                    <span>For the past years I have been working in IT-support as a Service Desk Specialist</span>
                    <p></p>
                    <p></p>
                </Container>
            </header>
        </section>
    </div>
    );
}

export default About;
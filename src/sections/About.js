import '../App.css';
import Container from 'react-bootstrap/Container';

function About({id}) {
    return (
    <div className="Second-page" id={id}>
        <section>
            <header className="Maincontent">
                <h2>About Me</h2>
                <Container>
                    <span>I am an aspiring game developer and IT professional. </span>
                    <p></p>
                    <span> My interest towards computers and programming originally came from video games when I was a child </span>
                    <span> and ever since then I've been inspired to constantly learn new skills. </span>
                    <p></p>
                    <span> I've always been eager to learn how things work "under the hood"</span>
                    <p></p>
                    <span> For the past years I've been working in IT-support and developing games in my own time. </span>
                    <p></p>
                    <span>I have a bachelor's degree in information technology. I studied software engineering and networking in </span>
                    <span>Vaasa University of Applied Sciences</span>
                    <p></p>
                    <p></p>
                </Container>
            </header>
        </section>
    </div>
    );
}

export default About;
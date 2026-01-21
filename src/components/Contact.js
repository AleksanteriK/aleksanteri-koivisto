import '../App.css';

function Contact({id}) {
    return (
    <div id={id}>
        <section>
            <header className="Maincontent">
                <h2>Contact me!</h2>
                <span> koivistoaleksanteri1@gmail.com </span>
                <p></p>
                <p></p>
                <span><a href="https://github.com/AleksanteriK">GitHub</a> <a href="https://www.linkedin.com/in/aleksanteri-koivisto-b0172222a">LinkedIn</a></span>
            </header>
        </section>
    </div>
    );
}

export default Contact;
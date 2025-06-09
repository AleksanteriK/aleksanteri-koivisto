import '../App.css';

function Competences({id}) {
    return (
    <div className="Competences" id={id}>
    <section>
            <header className="Maincontent">
                <h2>Competences</h2>
                <p></p>
                <p>Networking Courses Completed</p>
                <ul className="languagelist">
                    <div className="content-right">
                        <li>
                        <span> (2023) </span>
                        <span> CCNA 1: Introduction to Networks </span>
                        </li>
                        <p></p>
                        <li>
                        <span> (2024) </span>
                        <span> CCNA 2: Switching, Routing, and Wireless Essentials </span>
                        </li>
                        <p></p>
                        <li>
                        <span> (2025) </span>
                        <span> CCNA: Cisco Cybersecurity Associate </span>
                        </li>
                    </div>
                </ul>
            </header>
        </section>
    </div>
    );
}

export default Competences;
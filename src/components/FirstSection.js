import '../App.css';

function First({id}) {
    return (
    <div className="First-page" id={id}>
        <section>
            <header className="First-page-maincontent">
              <p>Hey, I am</p>
              <h1>Aleksanteri Koivisto</h1>
              <p></p>
              <span className='infotext'>IT student studying in Vaasa, Western Finland</span>
            </header>
        </section>
    </div>
    );
}

export default First;
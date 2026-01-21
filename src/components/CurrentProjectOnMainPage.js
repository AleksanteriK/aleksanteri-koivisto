import '../App.css';
import { Link } from 'react-router-dom';
import AutoPlayVideo from './AutoPlayVideo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CurrentProjectOnMainPage({ id }) {
    return (
        <div className="Fourth-page" id={id} style={{ height: '100vh' }}>
            <section>
                <header className="Maincontent">
                    <h2>Current Project</h2>
                    <p></p>
                    <Container>
                        {/*video ja titteli*/}
                        <Row className='justify-content-center'>
                            <Col xs={10} md={8} lg={6} className="d-flex flex-column align-items-center">
                                <div>
                                    <Link to="/iceresurfacergame"
                                    className="link-to-project-page"
                                    >
                                        <AutoPlayVideo src={process.env.PUBLIC_URL + '/game_showcase_compressed_720.mp4'} poster={process.env.PUBLIC_URL + '/firstperson_view.png'}/>
                                        <h4 className='current-project-title' style={{ margin: '10px 0 0 0', fontWeight: 'bold', textAlign: 'center', padding:'1' }}>Ice Resurfacer Game</h4>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                        {/*info*/}
                        <Row className='justify-content-center' style={{ marginTop: '1rem' }}>
                            <Col xs={10} md={8} lg={6} className="d-flex flex-column align-items-center">
                                <div style={{ padding: '1rem', backgroundColor: '#1f2127', borderRadius: '10px', marginBottom: '10px' }}>
                                    <div style={{textAlign: 'center' }}>
                                        <small>A solo project that is currently in early development. </small>
                                    </div>
                                </div>
                            </Col>                            
                        </Row>
                    </Container>
                </header>
            </section>
        </div>
    );
}

export default CurrentProjectOnMainPage;
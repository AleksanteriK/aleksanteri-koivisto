import '../App.css';
import { Link } from 'react-router';
import { useEffect } from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import TopBar from './TopBarInGamePage';
import AutoPlayVideo from './AutoPlayVideo';

function IceResurfacerGamePage({ id }) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <TopBar/>
            <header className="Maincontent">
                <Container style={{backgroundColor: '#1f2127'}}>
                    <p></p>
                    <Row>
                        <Col xs={8} md={6} lg={4} className="d-flex flex-column align-items-center">
                            <Link to="/aleksanteri-koivisto"
                            className="link-to-project-page"
                            >
                                <h4 className='current-project-title' style={{ margin: '10px 0 0 0', fontWeight: 'bold', textAlign: 'center', padding:'1' }}>Go Back</h4>
                            </Link>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '1rem' }}>
                        <AutoPlayVideo src={process.env.PUBLIC_URL + '/game_showcase_compressed_720.mp4'} poster={process.env.PUBLIC_URL + '/firstperson_view.png'}/>
                    </Row>
                    {/*tagit */}
                    <Row className='justify-content-center'>
                        <Col xs="auto">
                            <div className="projects" style={{ marginTop: '15px', display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
                                <p className='tag-style'>Unity</p>
                                <p className='tag-style'>C#</p>
                                <p className='tag-style'>HLSL</p>
                                <p className='tag-style'>Blender</p>
                                <p className='tag-style'>Gimp</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-center' style={{ marginTop: '1rem' }}>
                        <Col xs={10} md={8} lg={6} className="d-flex flex-column align-items-center">
                            <div style={{ padding: '1rem', backgroundColor: '#282c34', borderRadius: '10px', marginBottom: '10px', fontSize: '1.20rem'}}>
                                <div style={{textAlign: 'center' }}>
                                    <strong>About</strong>
                                    <p></p>
                                    <small>This is a passion project I began developing in the summer of 2025. </small>
                                    <small>My goal is to create a simulator-type game that introduces </small>
                                    <small>realistic technical elements of ice resurfacing while still </small>
                                    <small>keeping it accessible and fun to the player.</small>
                                </div>
                            </div>
                        </Col>                            
                    </Row>
                    <p></p>
                    <Row style={{marginTop: '1.5rem'}} className='projects align-items-center justify-content-center mb-4'>
                        <Col xs={10} md={4} lg={4}>
                            <div className='image-card'>
                                <AutoPlayVideo 
                                    src={process.env.PUBLIC_URL + '/vertex_color_shader.png'} 
                                    poster={process.env.PUBLIC_URL + '/vertex_color_shader.png'} 
                                    className="current-project-image" 
                                />
                                <h6 style={{ textAlign: 'center', fontSize: '0.8rem' }}>Changed ice color</h6>
                            </div>
                        </Col>
                        <Col xs={12} md={7} lg={6}>
                            <div style={{ padding: '1rem'}}>
                                <div style={{ fontSize: '1.20rem' }}>
                                    <strong>Vertex Color Shader</strong>
                                    <div className="d-flex flex-column">
                                        <small>Displaying dynamic ice color changes</small>
                                        <p></p>
                                        <small>The ice in the game is a dense mesh with transparent material. </small>
                                        <small>The material of the ice uses a custom vertex color shader that </small>
                                        <small>updates the mesh's <strong>Color32</strong> vertex color array in real-time </small>
                                        <small>depending where the player drives on the ice.</small>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <p></p>
                    <Row className='projects align-items-center justify-content-center mb-4'>
                        <Col xs={10} md={4} lg={4}>
                            <div className='image-card'>
                                <AutoPlayVideo 
                                    src={process.env.PUBLIC_URL + '/coroutine_action.mp4'} 
                                    className="current-project-image" 
                                />
                                <h6 style={{ textAlign: 'center', fontSize: '0.8rem' }}>Example of a coroutine action</h6>
                            </div>
                        </Col>
                        <Col xs={12} md={7} lg={6}>
                            <div style={{ padding: '1rem'}}>
                                <div style={{ fontSize: '1.20rem' }}>
                                    <strong>Coroutines</strong>
                                    <div className="d-flex flex-column">
                                        <small>Some actions in the game runs asynchronously</small>
                                        <p></p>
                                        <small>Unity's coroutines execute functions that return a <strong> C# IEnumerator</strong>,</small>
                                        <small>allowing tasks to be spread across multiple frames. This has </small>
                                        <small>enabled me to make smooth transitions—such as the rotations </small>
                                        <small>shown in the video—without stalling the main thread or blocking the game loop.</small>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row md="auto" sm="auto" xs="auto" className='justify-content-center' style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                        <Col>
                        <div style={{ padding: '1rem', borderRadius: '10px', fontSize: '1.40rem'}}>
                            <strong>GameObject.SendMessage VS Use of interfaces</strong>
                            <p></p>
                            <small>In the beginning of development, I was using <strong>GameObject.SendMessage()</strong> calls in player interactions. </small>
                            <small>The problem with this approach is that it's a fairly heavy operation. </small>
                            <small>It uses reflection-based lookups to find the correct function. Also, if it fails to find </small>
                            <small>the wanted function, no errors or warnings are generated. This could cause problems in debugging </small>
                            <small>and there is no type safety.</small>
                            <p></p>
                            <small>To improve clarity and also slightly performance, I implemented interfaces. </small>
                            <small>Every interactable object in the game shares the same interface. </small>
                            <p></p>
                            {/* New Code Snippet Section */}
                            <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                                <Accordion flush>
                                    <Accordion.Item eventKey="0" style={{ backgroundColor: '#2a2d34', border: '1px solid #444', borderRadius: '8px' }}>
                                        <Accordion.Header className="custom-accordion-header">
                                            <small style={{ fontWeight: 'bold' }}>Example of an interactable class (C#)</small>
                                        </Accordion.Header>
                                        <Accordion.Body style={{ backgroundColor: '#1a1c20', color: 'white', fontSize: '0.85rem' }}>
                                            <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`
public class ZamboniButtonHeadLightsButton : MonoBehaviour, I_Interactable, I_InteractableUI
{
    [Header("Own properties")]
        [SerializeField] private MeshRenderer _buttonMesh;
        [SerializeField] private MeshRenderer _headlightMesh;
        [SerializeField] private Zamboni Self;

    [Header("Change colors")]
        [SerializeField] private Color _colorOn = Color.white;
        [SerializeField] private Color _colorOff = Color.black;

    private Material _headlightInstanceMaterial;

    private Vector3 _pressedLocation;
    private Vector3 _notPressedLocation;

    private bool _isPushed = false;
    private bool _headLightsAreOn = false;

    private float _emissionIntensity = 2.0f;
    private static readonly int EmissionColorID = Shader.PropertyToID("_EmissionColor");

    private IButton _buttonSelfScript;

    public void OnPlayerInteract()
    {
        if (!_isPushed)
        {
            Push();
            if (Self.GetState() == ZamboniGlobal.ZamboniState.Running) LightsOn();
        }

        else
        {
            UnPush();
            if (Self.GetState() == ZamboniGlobal.ZamboniState.Running) LightsOff();
        }
    }

    public void Push()
    {
        _buttonMesh.transform.localPosition = _pressedLocation;
        _isPushed = true;
    }

    public void UnPush()
    {
        _buttonMesh.transform.localPosition = _notPressedLocation;
        _isPushed = false;
    }

    public string GetDisplayNameOrAction()
    {
        return _isPushed ? "Turn off head lights" : "Turn on head lights";
    }

    private void LightsOn()
    {
        if (_headlightInstanceMaterial == null) return;

        _headLightsAreOn = true;
        _headlightInstanceMaterial.EnableKeyword("_EMISSION");

        Color finalColor = _colorOn * Mathf.LinearToGammaSpace(_emissionIntensity);
        _headlightInstanceMaterial.SetColor(EmissionColorID, finalColor);

        DynamicGI.SetEmissive(_headlightMesh, finalColor);
    }

    private void LightsOff()
    {
        if (_headlightInstanceMaterial == null) return;

        _headLightsAreOn = false;
        _headlightInstanceMaterial.SetColor(EmissionColorID, _colorOff);

        DynamicGI.SetEmissive(_headlightMesh, _colorOff);
    }

    private IEnumerator WaitForAWhileAndInitiateValues()
    {
        yield return new WaitForSeconds(0.1f);
        _buttonSelfScript = GetComponent<IButton>();

        if (_buttonSelfScript != null)
        {
            _pressedLocation = _buttonSelfScript.GetPressedLocation();
            _notPressedLocation = _buttonSelfScript.GetNotPressedLocation();
        }

        _buttonMesh = GetComponent<MeshRenderer>();
        Push();
    }

    void Start()
    {
        //Getting the material instance from the mesh to avoid 
        //modifying the project asset directly (which fails in builds).
        if (_headlightMesh != null)
        {
            _headlightInstanceMaterial = _headlightMesh.material;
        }

        StartCoroutine(WaitForAWhileAndInitiateValues());
    }

    void Update()
    {
        if (Self.GetState() == ZamboniGlobal.ZamboniState.Stopped && _headLightsAreOn)
        {
            LightsOff();
        }

        else if (Self.GetState() == ZamboniGlobal.ZamboniState.Running && !_headLightsAreOn && _isPushed)
        {
            LightsOn();
        }
    }
}
`}
                                            </pre>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                                <strong>What I have learned so far</strong>
                                <p></p>
                                <small>Building on the foundations of my previous game <a className='small-title' href={"https://github.com/AleksanteriK/Checkers3D"}><strong>Checkers3D</strong></a>, </small>
                                <small>I have significantly deepened my expertise in Unity. </small>
                                <br/>
                                <small>To create my own 3D assets for the game, I had to learn modeling in Blender almost from the ground up, </small>
                                <small>as I had previously only created very simple models. </small>
                                <p></p>
                                <h5>Key things I have learned about Unity to Blender workflow:</h5>
                                <small>- Ensuring correct normals, scale and rotation when exporting FBX files</small>
                                <p></p>
                                <small>- How Unity and Blender handle 3D coordinate systems differently</small>
                                <p></p>
                                <small>As the project has grown over time, I have realized how much it helps </small>
                                <small>to keep project folder structures and naming conventions consistent. </small>
                                <small>Also, writing some documentation for myself has proven to be useful.</small>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
}

export default IceResurfacerGamePage;
import 'bootstrap/dist/css/bootstrap.min.css';
import About from '../sections/About';
import Competences from '../sections/Competences';
import Contact from '../sections/Contact';
import CurrentProjectOnMainPage from '../sections/CurrentProjectOnMainPage';
import Introduction from '../sections/Introduction';
import NavigationBar from '../components/NavigationBar';
import Projects from '../sections/Projects';
import TechincalSkills from '../sections/TechnicalSkills';

function MainPage() {
  return (
    <div>
        <NavigationBar/>
        <Introduction id="home"/>
        <About id="about"/>
        <CurrentProjectOnMainPage id="currentprojectonmainpage"/>
        <Projects id="projects"/>
        <TechincalSkills id="technologies"/>
        <Competences id="competences"/>
        <Contact id="contact"/>
    </div>
  );
}

export default MainPage;

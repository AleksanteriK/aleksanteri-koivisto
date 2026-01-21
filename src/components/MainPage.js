import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import Competences from './Competences';
import Contact from './Contact';
import CurrentProjectOnMainPage from './CurrentProjectOnMainPage';
import Introduction from './Introduction';
import NavigationBar from './NavigationBar';
import Projects from './Projects';
import TechincalSkills from './TechnicalSkills';

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

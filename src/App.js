import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import NavigationBar from './components/NavigationBar';
import Competences from './components/Competences';
import Contact from './components/Contact';

function App() {
  return (
    <div>
        <NavigationBar/>
        <FirstSection id="home"/>
        <SecondSection id="about"/>
        <ThirdSection id="technologies"/>
        <FourthSection id="works"/>
        <Competences id="competences"/>
        <Contact id="contact"/>
    </div>
  );
}

export default App;

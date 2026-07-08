import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import IceResurfacerGamePage from './components/IceResurfacerGamePage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/iceresurfacergame" element={<IceResurfacerGamePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

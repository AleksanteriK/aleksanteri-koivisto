import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import IceResurfacerGamePage from './pages/IceResurfacerGamePage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/aleksanteri-koivisto" element={<MainPage/>} />
          <Route path="/aleksanteri-koivisto/iceresurfacergame" element={<IceResurfacerGamePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

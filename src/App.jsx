import './App.css';
import Home from './components/Home'
import Contact from './components/Contact'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import config from './config';
import NoPage from './components/NoPage';
import Realisations from './components/Realisations';
import Services from './components/Services';
import Materiel from './components/Materiel';

function App() {
  return (
    <div style={{ backgroundColor: config.colors.primary, margin: 0, padding: 0 }}>
      <Router>
        <div>
          <TopBar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/realisations" element={<Realisations />} />
              <Route path="/services" element={<Services />} />
              <Route path="/materiel" element={<Materiel />} />
              <Route path="*" element={<NoPage />} />
          </Routes>
          <BottomBar />
        </div>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import HeroSection from './Hero/HeroSection';
import Footer from './Footer/Footer';
import Events from './Events/Events';
import Notifypage from './GetNotify/Notifypage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/notify" element={<Notifypage />} />
        <Route path="/events" element={<Events/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

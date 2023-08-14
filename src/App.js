import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import ContactForm from "./pages/ContactForm";
import Footer from "./components/Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contactForm" element={<ContactForm />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

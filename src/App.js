import './App.css';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaBars, FaFile, FaFileCode, FaHome, FaPhone, FaMoon, FaPen, FaSun} from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { useState } from 'react';
import Home from './pages/home';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Contact from './pages/contact';


function App() {
  document.title = "Viswanathan's Portfolio"; 
  const [open, setOpen] = useState("flex");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [active, setActive] = useState("Home");

  const toggleTheme = (() => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  });

  const handleOpen = (() => {
    if (window.innerWidth>456)
    {
      return;
    }
    open==="none"  ? setOpen("flex") : setOpen("none");
    document.getElementById("nav").style.display = open;
  })
  
  window.onload = toggleTheme;

  return (
    <div className='App'>
      <Router>
        <div className='nav-bar'>
          <Link to="/" className='img-logo' onClick={() => setActive("Home")}><img src='https://static.vecteezy.com/system/resources/previews/002/962/990/large_2x/vk-logo-monogram-with-pillar-shape-designs-template-free-vector.jpg' alt='logo'></img></Link>
          <nav id='nav'>
            <Link to="/" className={`btn ${active === "Home" ? "active" : ""}`} onClick={() => {setActive("Home")}}><FaHome className='icon'/><span className='nav-span'>Home</span></Link>
            <Link to="/experience" className={`btn ${active === "Experience" ? "active" : ""}`} onClick={() => {setActive("Experience")}}><FaFile className='icon'/><span className='nav-span'>Experience</span></Link>
            <Link to="/skills" className={`btn ${active === "Skills" ? "active" : ""}`} onClick={() => {setActive("Skills")}}><FaPen className='icon'/><span className='nav-span'>Skills</span></Link>
            <Link to="/projects" className={`btn ${active === "Projects" ? "active" : ""}`} onClick={() => {setActive("Projects")}}><FaFileCode className='icon'/><span className='nav-span'>Projects</span></Link>
            <Link to="/contact" className={`btn ${active === "Contact" ? "active" : ""}`} onClick={() => {setActive("Contact")}}><FaPhone style={{rotate : "90deg"}} className='icon'/><span className='nav-span'>Contact</span></Link>
          </nav>
          <div className='buttons'>
            <button className='theme' onClick={toggleTheme}>
              {isDarkMode ? <FaMoon /> : <FaSun />}
            </button>
            <button className='toggle' onClick={handleOpen}>
              {open!=="none" ? <FaBars/> : <FaX/>}
            </button>
          </div>
        </div>
        <div className='content'> 
          <Routes>
            <Route path='/' element={<Home/>} index/>
            <Route path='/experience' element={<Experience/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import { useEffect } from 'react';
import Skills from './pages/Skills';
import Home from './pages/Home';
import Footer from './parts/Footer';
import Header from './parts/Header';
import Experience from './pages/Experience';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {
  return (
    <div className='main-container'>
      <Header />
      <Home />
      <Skills />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

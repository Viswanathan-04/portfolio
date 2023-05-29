import './App.css';
import Header from './pages/header'
import Home from './pages/home';
import About from './pages/about';
import Experience from './pages/exp';
import Project from './pages/project';
import Contact from './pages/contact';
import './pages/resume.pdf';
import { FaCopyright } from 'react-icons/fa';

function App() {
  return (
    <>
      <section className='main-app' id='main-app'>
        <Header></Header>
        <Home></Home>
        <About></About>
        <Experience></Experience>
        <Project></Project>
        <Contact></Contact>
        <div className='footer'>
          <p className='ftxt'>Copyright <FaCopyright className='cp'></FaCopyright> 2023 Viswanathan Krishnan</p>
        </div>
      </section>
    </>
  );
}

export default App;

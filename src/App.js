import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { useRef, useState } from 'react';
import Contact from './components/Contact';
import Footer from './Footer';


function App() {
  const [activePage, setActivePage] = useState('Home');

  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
  };

  const handleSetActivePage = (pageName) => {
    setActivePage(pageName);
    switch (pageName) {
      case 'Home':
        scrollToRef(homeRef);
        break;
      case 'Skills':
        scrollToRef(skillsRef);
        break;
      case 'Projects':
        scrollToRef(projectsRef);
        break;
      default:
        break;
    }
  };

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <Home />;
      case 'Skills':
        return <Skills />;
      case 'Projects':
        return <Projects />;
      default:
        return <Home />;
    }
  };

  return (
    <div className='App'>      
      <div className="background-overlay"></div>
      <Header setActivePage={setActivePage} activePage={activePage} handleSetActivePage = {handleSetActivePage } />
      <div ref={homeRef}>
        <Home contactRef={contactRef} />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}> {/* Dodajte referencu za Contact komponentu */}
        <Contact />
      </div>
      <Footer />
      {/* {renderPage()} */}
    </div>
  );
}

export default App;

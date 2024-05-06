import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { useState } from 'react';
import Contact from './components/Contact';


function App() {
  const [activePage, setActivePage] = useState('Home');

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
      <Header setActivePage={setActivePage} activePage={activePage} />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      {/* {renderPage()} */}
    </div>
  );
}

export default App;

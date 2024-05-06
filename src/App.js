import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { useState } from 'react';

function App() {
  const [activePage, setActivePage] = useState('Home');

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <Home />;
      case 'About':
        return <Skills />;
      case 'Contact':
        return <Projects />;
      default:
        return <Home />;
    }
  };

  return (
    <div className='App'>
      <Header setActivePage={setActivePage} activePage={activePage} />
      {renderPage()}
    </div>
  );
}

export default App;

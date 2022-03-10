import React, { useState } from 'react';
//import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  // Start tab navigation where you left off in the session
  let lastNavTab = sessionStorage.getItem('lastNavTab')
  lastNavTab = lastNavTab ? lastNavTab : 'About'

  const [currentPage, setCurrentPage] = useState(lastNavTab);

  const pickPageTab = () => {
    sessionStorage.setItem('lastNavTab', currentPage);
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <ContactForm />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav handlePageChange={handlePageChange} />
      {pickPageTab()}
      <Footer currentPage={currentPage} />
    </div>
  );
}

export default App;

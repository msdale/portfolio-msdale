import React, { useState } from 'react';
//import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const pickPageTab = () => {
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
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {pickPageTab()}
      <Footer />
    </div>
  );
}

export default App;

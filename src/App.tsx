import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Story from './components/Story';
import Location from './components/Location';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Menu />
      <Story />
      <Location />
      <Contact />
    </div>
  );
}

export default App;
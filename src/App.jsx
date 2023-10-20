import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero'
import MiddleSection from './components/middle1';
import FrontSection from './components/middle2';
import HorizontalMenu from './components/middle3';
import FrontDSection from './components/middle4';
import DownSection from './components/downsection';
import Footer from './components/footer';


function App() {
    return (
      <div>
        <Navbar />
        <Hero />
        <MiddleSection />
        <FrontSection />
        <HorizontalMenu />
        <FrontDSection />
        <DownSection />
        <Footer />
        </div>
  );
}
export default App;
import React from 'react';
import NavBar from './components/navbar';
import Services from './components/services';
import Testimonial from './components/testimonial';
import Pricing from './components/pricing';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className='top-content'>
    <NavBar />
    <Services />
    <Testimonial />
    <Pricing />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;

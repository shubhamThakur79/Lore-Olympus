// In App.js
import React, { Suspense } from 'react';
import Characters from './components/Characters';
import CarouselComponent from './components/Carousel';
import Footer from './components/Footer';
const Navbar = React.lazy(() => import('./components/Navbar'));
const Hero = React.lazy(() => import('./components/Hero'));
// const Characters = React.lazy(() => import('./components/Characters'));
// ...other components

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Hero />
      <Characters />
      <CarouselComponent />
      <Footer />
    </Suspense>
  );
}
 export default App
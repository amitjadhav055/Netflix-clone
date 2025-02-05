import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Row from './components/Row';

const App = () => {
  const sampleMovies = [
    { name: 'Movie 1', image: '/path-to-image1.jpg' },
    { name: 'Movie 2', image: '/path-to-image2.jpg' },
    { name: 'Movie 3', image: '/path-to-image3.jpg' },
  ];

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Row title="Popular on Netflix" movies={sampleMovies} />
      <Row title="Trending Now" movies={sampleMovies} />
    </div>
  );
};

export default App;

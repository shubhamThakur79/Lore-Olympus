import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://animemangatoon.com/wp-content/uploads/2024/05/lore--1140x570.png')" }}>
      <div className="h-full w-full flex flex-col items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-5xl md:text-7xl text-white font-bold animate-fade-in-down text-center px-4">Jaw Dropping Scenes in Media</h1>
        <a href="https://animemangatoon.com/" className="mt-8 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded hover:bg-blue-700 transition duration-300">Read More</a>
      </div>
    </section>
  );
}

export default Hero;

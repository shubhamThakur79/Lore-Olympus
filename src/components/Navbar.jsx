import React, { useState } from 'react';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="bg-transparent absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-white text-2xl font-bold">Lore Olympus</div>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="text-white hover:text-gray-300">Home</a></li>
          <li><a href="#characters" className="text-white hover:text-gray-300">Characters</a></li>
          <li><a href="#read-more" className="text-white hover:text-gray-300">Read More</a></li>
        </ul>
        <div className="md:hidden">
          <button onClick={() => setNavOpen(!navOpen)} className="text-white focus:outline-none">
            {/* Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" ></svg>
          </button>
        </div>
      </div>
      {navOpen && (
        <ul className="md:hidden bg-black bg-opacity-90">
          <li><a href="#home" className="block px-4 py-2 text-white">Home</a></li>
          <li><a href="#characters" className="block px-4 py-2 text-white">Characters</a></li>
          <li><a href="#read-more" className="block px-4 py-2 text-white">Read More</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;

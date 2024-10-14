import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto px-6 text-center text-white">
        <p>&copy; {new Date().getFullYear()} Lore Olympus. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

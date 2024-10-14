import React from 'react';

const characters = [
  {
    name: 'Persephone',
    image: 'https://animemangatoon.com/wp-content/uploads/2024/05/zo3dwfwa-360x504.png.webp',
    description: 'Goddess of Spring and Queen of the Underworld.',
  },
  {
    name: 'Hades',
    image: 'https://animemangatoon.com/wp-content/uploads/2024/05/64u47lg4-360x504.png.webp',
    description: 'God of the Underworld, ruler of the dead.',
  },
  {
    name: 'javed',
    image: 'https://animemangatoon.com/wp-content/uploads/2024/05/p682kcd9-360x504.png.webp',
    description: 'God of the Underworld, ruler of the dead.',
  },
  {
    name: 'Shubham',
    image: 'https://animemangatoon.com/wp-content/uploads/2024/05/myq53tdb-360x504.png.webp',
    description: 'God of the Underworld, ruler of the dead.',
  },
  {
    name: 'Shubham',
    image: 'https://animemangatoon.com/wp-content/uploads/2024/05/ilzxkblr-350x350.png.webp',
    description: 'God of the Underworld, ruler of the dead.',
  },
  {
    name: 'Shubham',
    image: 'https://animemangatoon.com/wp-content/uploads/2024/05/hlymlxkd-360x504.png.webp',
    description: 'God of the Underworld, ruler of the dead.',
  },
  
];

const Characters = () => {
  return (
    <section id="characters" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Main Characters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {characters.map((character, index) => (
            <div key={index} className="relative group">
              <img src={character.image} alt={character.name} className="w-full h-auto rounded-lg" loading="lazy" />
              <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="text-center px-4">
                  <h3 className="text-white text-2xl font-bold mb-2">{character.name}</h3>
                  <p className="text-white">{character.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Characters;

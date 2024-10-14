import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const manhwas = [
  {
    title: 'Solo Leveling',
    image: 'https://animemangatoon.com/wp-content/uploads/2024/06/Screenshot-2024-06-15-154729-e1721129126183-750x375.jpg',
  },
  {
    title: 'Tower of God',
    image: 'https://animemangatoon.com/wp-content/uploads/2024/06/season-1-1.jpg',
  },
  {
    title: 'Tower of Leveling Up with the Gods',
    image: 'https://animemangatoon.com/wp-content/uploads/2024/05/594f4d74-e0a2-4179-b8f5-141f140345d0-e1721128805577-1024x368.jpg',
  },
  {
    title: 'Tower of Leveling Up with the Gods',
    image: 'https://animemangatoon.com/wp-content/uploads/2024/05/Screenshot-2024-06-25-113722-e1721128847688.jpg',
  },
  // Add more manhwas as needed
];

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Supernatural Manhwas</h2>
        <Slider {...settings}>
          {manhwas.map((item, index) => (
            <div key={index} className="px-3">
              <div className="bg-gray-200 p-4 rounded-lg">
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-lg" loading="lazy" />
                <h3 className="text-xl font-semibold mt-4 text-center">{item.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default CarouselComponent;

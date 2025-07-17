import { useState, useEffect } from 'react';

const HeroImageGallery = () => {
  const images = [
    "https://d64gsuwffb70l.cloudfront.net/684f46edcb577105805e079a_1752638494429_5c8a3195.jpg",
    "https://d64gsuwffb70l.cloudfront.net/684f46edcb577105805e079a_1752638505291_249550e6.jpg",
    "https://d64gsuwffb70l.cloudfront.net/684f46edcb577105805e079a_1752638526906_8b0016b7.jpg",
    "https://d64gsuwffb70l.cloudfront.net/684f46edcb577105805e079a_1752638532134_d53f04b7.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-2xl">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Torres Pest Control ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroImageGallery;
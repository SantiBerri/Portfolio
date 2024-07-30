"use client"
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

// Importar imágenes
import image1 from '@/../public/m21.png';
import image2 from '@/../public/m22.png';
import image3 from '@/../public/m23.png';
import image4 from '@/../public/m31.png';
import image5 from '@/../public/m32.png';
import image6 from '@/../public/m33.png';
import image7 from '@/../public/m41.png';
import image8 from '@/../public/m42.png';
import image9 from '@/../public/m43.png';
import image10 from '@/../public/m44.png';
import image11 from '@/../public/m45.png';
import image12 from '@/../public/m46.png';

interface CardProps {
  images: { src: StaticImageData; width: number; height: number }[];
  description: string;
  githubUrl: string;
}

const cardsData: CardProps[] = [
  {
    images: [
      { src: image1, width: 1080, height: 920 },
      { src: image2, width: 1080, height: 920 },
      { src: image3, width: 1080, height: 920 },
    ],
    description: 'Proyecto realizado para el modulo 2 de SoyHenry, el cual consiste en conseguir peliculas de una api y mostrarlas en el inicio. Ademas de poder agregar peliculas',
    githubUrl: 'https://github.com/SantiBerri/M2Henry',
  },
  {
    images: [
      { src: image4, width: 1080, height: 920 },
      { src: image5, width: 1080, height: 920 },
      { src: image6, width: 1080, height: 920 },
    ],
    description: 'Proyecto realizado para el modulo 3 de SoyHenry, el cual consiste en una aplicacion para sacar turnos, en mi caso elegi una pizzeria',
    githubUrl: 'https://github.com/SantiBerri/M3Henry',
  },
  {
    images: [
      { src: image7, width: 1080, height: 920 },
      { src: image8, width: 1080, height: 920 },
      { src: image9, width: 1080, height: 920 },
      { src: image10, width: 1080, height: 920 },
      { src: image11, width: 1080, height: 920 },
      { src: image12, width: 1080, height: 920 },
    ],
    description: 'Proyecto realizado para el modulo 4 de SoyHenry, el cual consiste en un E-commerce, en mi caso de productos Apple, que tuviera un carrito, un dashboard, y historial de ordenes. Todo esto con persistencia de datos',
    githubUrl: 'https://github.com/SantiBerri/M4Henry',
  },
];

const Card: React.FC<CardProps> = ({ images, description, githubUrl }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-cyan-200 shadow-md border border-cyan-400 p-4">
      <div className="relative" style={{ width: '350px', height: '320px' }}>
        <Image 
          src={images[currentIndex].src} 
          alt={`Slide ${currentIndex}`} 
          width={images[currentIndex].width} 
          height={images[currentIndex].height} 
          className="w-full h-full object-contain" 
        />
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-r"
        >
          {'<'}
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-l"
        >
          {'>'}
        </button>
      </div>
      <div className="px-6 py-4">
        <p className="text-white text-base mb-4">{description}</p>
        <div className="w-full flex justify-center">
          <Link href={githubUrl} passHref>
            <button className="flex items-center justify-center w-full text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
              <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFFFFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
              <span className="ml-2">Github</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CardsContainer = () => (
  <div className="flex flex-wrap justify-around mt-10">
    {cardsData.map((card, index) => (
      <div key={index} className="m-4">
        <Card images={card.images} description={card.description} githubUrl={card.githubUrl} />
      </div>
    ))}
  </div>
);

export default CardsContainer;

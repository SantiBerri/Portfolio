"use client"
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

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
}

const cardsData: CardProps[] = [
  {
    images: [
      { src: image1, width: 1080, height: 920 },
      { src: image2, width: 1080, height: 920 },
      { src: image3, width: 1080, height: 920 },
    ],
    description: 'Proyecto realizado para el modulo 2 de SoyHenry, el cual consiste en conseguir peliculas de una api y mostrarlas en el inicio. Ademas de poder agregar peliculas',
  },
  {
    images: [
      { src: image4, width: 1080, height: 920 },
      { src: image5, width: 1080, height: 920 },
      { src: image6, width: 1080, height: 920 },
    ],
    description: 'Proyecto realizado para el modulo 3 de SoyHenry, el cual consiste en una aplicacion para sacar turnos, en mi caso elegi una pizzeria',
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
  },
];

const Card: React.FC<CardProps> = ({ images, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-cyan-200 shadow-md border border-cyan-400 p-4">
      <div className="relative" style={{ width: '350px', height: '320px'  }}>
        <Image 
          src={images[currentIndex].src} 
          alt={`Slide ${currentIndex}`} 
          width={images[currentIndex].width} 
          height={images[currentIndex].height} 
          className="w-full h-full object-contain" 
        />
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-r"
        >
          {'<'}
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-l"
        >
          {'>'}
        </button>
      </div>
      <div className="px-6 py-4">
        <p className="text-white text-base">{description}</p>
      </div>
    </div>
  );
};

const CardsContainer = () => (
  <div className="flex flex-wrap justify-around mt-10">
    {cardsData.map((card, index) => (
      <div key={index} className="m-4">
        <Card images={card.images} description={card.description} />
      </div>
    ))}
  </div>
);

export default CardsContainer;

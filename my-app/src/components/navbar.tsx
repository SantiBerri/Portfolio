import React from 'react';
import Social from './social';
import Socialgit from './socialgit';
import Link from 'next/link';
import cv from '@/../public/cv.pdf';

const Navbar = () => {
  return (
    <div className="h-20 bg-transparent sticky top-0 w-full z-50 px-4">
      <div className="flex items-center justify-center">
        <Socialgit />
        <button className="mt-5 px-4 py-2 text-white rounded">Proyectos</button>
        <a 
          href={cv} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-5 px-4 py-2 text-white rounded bg-gradient-to-r from-gray-800 to-black border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
        >
          Currículum
        </a>
        <button className="mt-5 px-4 py-2 text-white rounded">Contacto</button>
        <Social />
      </div>
    </div>
  );
};

export default Navbar;

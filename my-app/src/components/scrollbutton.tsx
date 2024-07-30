"use client"

import React from 'react';

const ScrollButton = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight, // Ajusta esta propiedad según dónde quieras que haga scroll
      behavior: 'smooth', // Hace el scroll de manera suave
    });
  };

    return (
      <>
        <div className='flex flex-col items-center'>
          <div className='text-cyan-400'>
            Proyectos
          </div>
          <button
            onClick={handleScrollDown}
            className='px-4 py-2 transition duration-300 text-cyan-400 hover:animate-bounce'
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
              <path fill="#22d3ee" d="M12 21.9q-.2 0-.375-.075T11.3 21.6l-5.6-5.575q-.275-.275-.275-.7T5.7 14.6q.3-.3.713-.3t.712.3L11 18.5v-6.175q0-.425.288-.712t.712-.288t.713.288t.287.712V18.5l3.9-3.9q.275-.275.688-.275t.712.3q.275.275.275.7t-.275.7L12.7 21.6q-.15.15-.325.225T12 21.9m0-12.575q-.425 0-.712-.287T11 8.325v-1q0-.425.288-.712T12 6.325t.713.288t.287.712v1q0 .425-.288.713T12 9.325m0-5q-.425 0-.712-.287T11 3.325t.288-.712t.712-.288t.713.288t.287.712t-.288.713t-.712.287"/>
            </svg>
          </button>
        </div>
      </>
    );
  };
  
  export default ScrollButton;
  
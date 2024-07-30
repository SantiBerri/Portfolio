import React from 'react';
import Social from './social';
import Socialgit from './socialgit';

const Navbar = () => {
  return (
    <div className="h-20 bg-transparent sticky top-0 w-full z-50 px-4">
      <div className="flex items-center justify-center">
        <Socialgit />
        <button className="mt-5 px-4 py-2  text-white rounded">Proyectos</button>
        <button className="mt-5 px-4 py-2  text-white rounded">Curriculum</button>
        <button className="mt-5 px-4 py-2  text-white rounded">Contacto</button>
        <Social />
      </div>
    </div>
  );
};

export default Navbar;

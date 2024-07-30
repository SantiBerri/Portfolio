import React from 'react'
import Image from 'next/image'
import foto from '@/../public/foto.jpg'

const Mainpage = () => {
  return (
    <div className='mt-20 flex justify-center items-center mb-20'>
      <div className='text-left mr-8'>
        <h1 className='text-7xl text-cyan-400'>Full-Stack Developer</h1>
        <h1 className='text-7xl text-white'>Santiago Berri</h1>
        <h1 className='text-white mt-2'>Soy Santiago Berri, tengo 18 y soy de Hernando, Cordoba, Argentina. <br/>
            Actualmente estoy en la utlima semana del proyecto final de Soy Henry <br/>
            y es por eso que estoy buscando mi primer empleo como desarrollador Junior. <br/>
            Trabajo tecnologias como node.js, react, next.js, javascript, typescript, entre otras. <br/>
            Ademas cuento con un certificado C1 en ingles, que podria ser de ayuda.<br/>
            </h1>
      </div>
      <div className='w-64 h-64 overflow-hidden rounded-full shadow-xl shadow-cyan-200'>
        <Image 
          className='object-cover' 
          src={foto} 
          alt="Developer" 
          width={400} 
          height={400} 
        />
      </div>
    </div>
  )
}

export default Mainpage

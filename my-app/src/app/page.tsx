import Mainpage from '@/components/mainpage'
import Navbar from '@/components/navbar'
import React from 'react'

const page = () => {
  return (
    <div className='bg-gradient-to-b from-mycyan to-bgr'>
      <Navbar />
      <Mainpage />
    </div>
  )
}

export default page
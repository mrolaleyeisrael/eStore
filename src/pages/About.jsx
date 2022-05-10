import React from 'react'
import { useNavigate } from 'react-router-dom'


const About = () => {
  const nav = useNavigate();

  return (
    <div className=' pt-32 px-5'>
      <button onClick={() => nav(-1)} className=' bg-blue-500 text-white px-4 py-2 rounded-full'> Back</button>
      <div className=' container mx-auto h-[70vh] flex justify-center items-center'>
        <h1 className=' text-blue-500 font-bold text-5xl'>About Page</h1>
      </div>
    </div>
  )
}

export default About
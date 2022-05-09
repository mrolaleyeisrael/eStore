import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' bg-blue-500 text-white shadow-lg fixed w-full top-0 z-20'>
      <nav className=' px-2 py-5 flex flex-row justify-between items-center mx-auto md:px-10 '>
        <h1 className=' text-2xl font-bold'><span>e</span>Store</h1>
        <div className=' md:space-x-10 hidden justify-between md:flex text-md font-bold'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h2>Dark Mode</h2>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
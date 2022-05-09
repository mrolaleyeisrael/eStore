import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <div className='w-full mx-auto bg-blue-500 text-white shadow-lg fixed  top-0 z-20'>
      <nav className=' container  px-2 py-5 flex flex-row justify-between items-center mx-auto md:px-10 '>
        <h1 className=' text-2xl font-bold'><span>e</span>Store</h1>
        <div className=' md:space-x-10 hidden justify-between md:flex text-md font-bold'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className='block md:hidden'>
          <FaBars onClick={() => {setClick(!click)}} className=' text-3xl border border-blue-500 bg-blue-500 text-white rounded-lg cursor-pointer' />
        </div>
        <div className={`${click? 'block':'hidden'} md:hidden absolute flex flex-col right-2 top-20 bg-blue-500 h-52 w-32 justify-center items-center space-y-2 rounded-lg`}>
          <div className=' border-b-2 py-1 w-full text-center'>
            <Link to="/">Home</Link>
          </div>
          <div className=' border-b-2 py-1 w-full text-center'>
            <Link to="/about">About</Link>
          </div>
          <div className=' border-b-2 py-100 w-full text-center'>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
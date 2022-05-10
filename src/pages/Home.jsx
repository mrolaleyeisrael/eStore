// import { useEffect, useState } from 'react'
import React from 'react'
import { BiHeart } from 'react-icons/bi'
import { BsEye } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Home = ({products, loading}) => {

  return (
    <section className='pt-32 pb-10'>
    <div className=' container mx-auto flex flex-col justify-between px-5 md:flex-row'>
      <div className=' hidden md:block h-screen bg-blue-500  md:w-1/5'>
        <div>Independence</div>
        <div>Independence</div>
        <div>Independence</div>
        <div>Independence</div>
        <div>Independence</div>
      </div>

      { loading && ( <div>Fetching Products</div> ) }

      <div className='container mx-auto grid gap-3 grid-cols-2 md:gap-5 sm:grid-cols-3 md:grid-cols-3  py-4 md:w-4/5  '>


        {products.map( (product) => (

        <div key={product.id} className=' shadow-xl bg-gray-200 border rounded-lg relative'>

          <div className=' relative  flex justify-center bg-white'>
            <img src={product.image} alt="" className=' h-52 rounded-lg hover:animate-pulse flex justify-center' />
              <div className=' bg-blue-500 rounded-full inline-flex p-1 absolute top-3 right-2'>
                {/* <FaLove /> */}
                <BiHeart title='Add to Wishlist' className='text-yellow-400 text-xl hover:cursor-pointer shadow-2xl' />
              </div>
          </div>

          <div className=' px-1 '>
            <p className=' text-xs mt-2'><span className=' text-xs text-gray-600'>Category: </span>{product.category}</p>
            <p className=' text-sm font-semibold '>{product.title}</p>
            <div>
              <p className=' text-xs text-gray-600 mt-3'>Price:</p>
              <h1 className=' font-bold tracking-wide'> <span className=' text-sm'>$</span>{product.price}</h1>
            </div>
            <div className=' bg-blue-500 rounded-full inline-flex p-1 absolute bottom-1 right-3'>
              <Link to={`/details/${product.title}/${product.id}`}>
                <BsEye  title='See Product' className=' text-xl text-yellow-400 hover:cursor-pointer shadow-2xl' />
              </Link>
            </div>
          </div>
        </div>

        ))}

      
      </div>
    </div>
      
    </section>
  )
}

export default Home
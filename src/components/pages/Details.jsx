import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Details = ({products}) => {
  const nav = useNavigate();
  const {title} = useParams();


  return (
    <div className=' pt-20 pb-20'>
      <div className=' container mx-auto px-3'>
        <button onClick={() => nav(-1)} className=' bg-blue-500 text-white px-4 py-2 rounded-full'> Back</button>

        {
          products.filter(product => product .title === title).map(
            (product, id) => (
              <div key={id} className ="flex flex-col md:flex-row">
              
                <img src={product.image} alt="" className=' h-96' />
                <h1><span className=' font-bold'>Product Name:</span> {product.title}</h1>
                <h1><span className=' font-bold'>Price:</span> {product.price}</h1>



              </div>
            )
          )
        }
      </div>
    </div>
  )
}

export default Details
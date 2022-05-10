import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Details from './pages/Details'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  const url = 'https://fakestoreapi.com/products'
  // const [error, setError] = useState(null)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchUsersData()
  }, [url])

  async function fetchUsersData() {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json();
      setProducts(data)
    } catch (error) {
      console.log(error)
    }

  setLoading(false)
}


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home products={products} loading={loading} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/details/:title/:id' element={<Details products={products} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
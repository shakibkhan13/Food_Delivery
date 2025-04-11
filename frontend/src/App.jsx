import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Cart from './Pages/cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/footer'
import Login from './Components/LoginPopUp/Login'

const App = () => {
  const [showLogin , setShowLogIn] = useState(false)
  return (
    <>
    {
      showLogin? <Login setShowLogIn ={setShowLogIn} /> : <></>
    }
      <div className='app'>
        <Navbar setShowLogIn = {setShowLogIn} />
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App
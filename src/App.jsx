import React from 'react'
import { Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import Orders from './pages/Orders'
import About from './pages/About';
import Navbar from './components/Navbar';
import Contact from './pages/Contact'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import Card from './pages/Card';
import Collection from './pages/Collection';
import Login from './pages/Login'
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

import { ToastContainer, toast } from 'react-toastify';
  
function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collection' element={<Collection/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/card' element={<Card/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/place-order' element={<PlaceOrder/>}/>
      <Route path='/orders' element={<Orders/>}/>

      

      </Routes>
      <Footer/>
    </div>
  )
}

export default App

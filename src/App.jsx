import React from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './assets/Pages/Home'
import About from './assets/Pages/About'
import { Route, Routes } from 'react-router-dom'
import A from './assets/A'
import Category from './assets/Pages/Category'
import Details from './assets/Pages/Details'
import Cart from './assets/Pages/Cart'
import SignIn from './assets/Pages/SignIn'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/category/:categoryId" element={<Category/>}/>
      <Route path="/details/:id" element={<Details/>}/>  
      <Route path="/cart/" element={<Cart/>}/>  
      <Route path="/signin" element={<SignIn/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App

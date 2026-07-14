import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Landing from './components/Landing'
import Product from './components/Product'
import Advertisment from './components/Advertisment'
import Footer from './components/Footer'
import "bootstrap-icons/font/bootstrap-icons.css";



function App() {
 

  return (
   <>
   <Header />
    <Landing />
    <Product />
    <Advertisment />
    <Footer />
   </>
  )
}

export default App

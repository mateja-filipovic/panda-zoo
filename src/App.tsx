import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from './components/footer'
import LandingPage from './scenes/landing'
import { Route, Routes } from 'react-router-dom'
import PackagesPage from './scenes/packages'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/packages" element={<PackagesPage/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

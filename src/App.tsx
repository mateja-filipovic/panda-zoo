import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from './components/footer'
import LandingPage from './scenes/landing'
import { Route, Routes, useLocation } from 'react-router-dom'
import PackagesPage from './scenes/packages'
import EventsPage from './scenes/events'
import AnimalsPage from './scenes/animals'
import ProfilePage from './scenes/profile'
import LoginPage from './scenes/login'

function App() {

  const { pathname } = useLocation();
  
  return (
    <div>
      {!pathname.includes("login") && <Navbar/>}
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/packages" element={<PackagesPage/>} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/animals" element={<AnimalsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {!pathname.includes("login") && <Footer/>}
    </div>
  )
}

export default App

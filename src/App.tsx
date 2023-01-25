import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from './components/footer'
import LandingPage from './scenes/landing'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import PackagesPage from './scenes/packages'
import EventsPage from './scenes/events'
import AnimalsPage from './scenes/animals'
import ProfilePage from './scenes/profile'
import LoginPage from './scenes/login'
import AnimalDetailsPage from './scenes/animal-details'
import RequestsPage from './scenes/requests'
import AddAnimalPage from './scenes/add-animal'

function App() {

  const { pathname } = useLocation();
  
  return (
    <div>
      {!pathname.includes("login") && <Navbar/>}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<LandingPage/>} />
        <Route path="/packages" element={<PackagesPage/>} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/animals" element={<AnimalsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/animals/:id" element={<AnimalDetailsPage />} />
        <Route path="/requests" element={<RequestsPage />} />
        <Route path="/add-animal" element={<AddAnimalPage />} />
      </Routes>
      {!pathname.includes("login") && <Footer/>}
    </div>
  )
}

export default App

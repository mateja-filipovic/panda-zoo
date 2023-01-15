import { useState } from 'react'
import Navbar from '@/components/navbar'
import HeroImage from '@/components/hero-image'
import TextSection from './components/text-section'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <HeroImage></HeroImage>
      <TextSection/>
    </div>
  )
}

export default App

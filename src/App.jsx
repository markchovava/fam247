import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

/* Pages */
import Contact from './Pages/Contact'
import Home from './Pages/Home/Home'
import NotFound from './Pages/NotFound'
import About from './Pages/About/About'
import DomiciliaryCare from './Pages/Service/DomiciliaryCare'
import RespiteCare from './Pages/Service/RespiteCare'
import PalliativeCare from './Pages/Service/PalliativeCare'
import SupportedLiving from './Pages/Service/SupportedLiving'
import LiveInCare from './Pages/Service/LiveInCare'

function App() {
  

  return (
    <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/domiciliary-care' element={<DomiciliaryCare />} />
          <Route path='/live-in-care' element={<LiveInCare />} />
          <Route path='/respite-care' element={<RespiteCare />} />
          <Route path='/palliative-care' element={<PalliativeCare />} />
          <Route path='/supported-living' element={<SupportedLiving />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </>
  )
}

export default App

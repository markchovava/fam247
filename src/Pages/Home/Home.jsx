import React, { useContext } from 'react'
import { MainContext } from '../../Context/MainContext'
/* Import Components */
import HeaderTop from '../../Components/HeaderTop'
import HeaderNav from '../../Components/HeaderNav'
import MainSlider from '../../Components/MainSlider'
import ContactFlex from '../../Components/ContactFlex'
import Footer from '../../Components/Footer'
import MainGrid from './components/MainGrid'
import FlexTwoMain from './components/FlexTwoMain'


function Home() {
    const { setActivePage } = useContext(MainContext);
    setActivePage('home')

  return (
    <div className='bg-slate-100'>
        <HeaderTop />
        <HeaderNav />
        <MainSlider />
        <MainGrid />
        <FlexTwoMain />
        <div className='bg-slate-200'>
          <ContactFlex />
        </div>
        <Footer />
    </div>
  )
}

export default Home
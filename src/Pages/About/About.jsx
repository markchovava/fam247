import React, { useContext } from 'react'
import { MainContext } from '../../Context/MainContext';
/* Import Components */
import HeaderTop from '../../Components/HeaderTop'
import HeaderNav from '../../Components/HeaderNav'
import Footer from '../../Components/Footer'
import Title from '../../Components/Title';
import ContactFlex from '../../Components/ContactFlex';
import TextLeft from './components/TextLeft';
import TextRight from './components/TextRight';


function About() {
  const { setActivePage } = useContext(MainContext);
    setActivePage('about')

  
 

  return (
    <div className='bg-slate-100'>
      <HeaderTop />
      <HeaderNav />
      <Title bg='bg__gradientGreen' title='About Us' />
      <TextLeft />
      <TextRight />
      <ContactFlex />
      <Footer />
    </div>
  )
}

export default About
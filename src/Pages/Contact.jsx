import React, { useContext } from 'react'
import { MainContext } from '../Context/MainContext';
/* Import Components */
import HeaderTop from '../Components/HeaderTop'
import HeaderNav from '../Components/HeaderNav'
import Footer from '../Components/Footer'
import Title from '../Components/Title';
import ContactFlex from '../Components/ContactFlex';


function Contact() {
  const { setActivePage } = useContext(MainContext);
    setActivePage('contact')

  return (
    <div className='bg-slate-100'>
      <HeaderTop />
      <HeaderNav />
      <Title bg='bg__gradientPink' title='Contact Us' />
      <ContactFlex />
      <Footer />

    </div>
  )
}

export default Contact
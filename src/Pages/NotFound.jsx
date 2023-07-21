import React from 'react'
/* Import Components */
import HeaderTop from '../Components/HeaderTop'
import HeaderNav from '../Components/HeaderNav'
import Footer from '../Components/Footer'
import Title from '../Components/Title'

function NotFound() {
  
  return (
    <div className='bg-slate-100'>
      <HeaderTop />
      <HeaderNav />
      <Title bg='bg__gradientGreen' title='Not Found...' />
      <Footer />
    </div>
  )
}

export default NotFound
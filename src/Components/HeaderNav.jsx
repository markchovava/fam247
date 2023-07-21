import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function HeaderNav() {
  return (
    <>
      <section className='w-full h-auto bg-[#181739] text-white'>
        <div className='container max-w-screen-xl mx-auto '>
          <section className='flex justify-between items-center py-2'>
            <div className='w-[18rem] h-[100%] flex justify-start items-center pb-4'>
              {/* <h1 className='text-white text-[3rem] font-bold'>FAM 24/7</h1> */}
              <Link to="/">
                <img src='./assets/img/logo/fam247_logo_small.png' className='w-full h-auto' />
              </Link>
            </div>
            <Navbar />
          </section>
        </div>
      </section>
    </>
  )
}

export default HeaderNav
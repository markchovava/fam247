import React from 'react'
import { BsFacebook, BsWhatsapp, BsTwitter } from 'react-icons/bs';
import { FaPhoneSquareAlt, FaTwitterSquare } from 'react-icons/fa'
import {  ImLocation2 } from 'react-icons/im'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div>
     <footer className='w-full h-auto bg-[#181739] text-white'>
        <section className='container mx-auto max-w-screen-xl p-5'>
          <div className='lg:flex block justify-between gap-5 py-[2rem] text-white'>
            <div className='lg:my-0 my-4 p-4 lg:basis-[31%] md:basis-[50%] basis-[100%]'>
              <div>
                <div className='w-[18rem] h-auto mb-4'>
                  <Link to="/">
                    <img src='./assets/img/logo/fam247_logo_small.png' className='w-full h-auto' />
                  </Link>
                  {/* <img src='./assets/img/logo/logo-normal.png' className='w-full h-auto' /> */}
                </div>
              </div>
              <div className='flex items-center justify-center gap-4'>
                <Link to=''>
                  <BsFacebook className='mb-2 text-xl text-slate-200 cursor-pointer 
                    hover:text-purple-400 transition duration-200 hover:scale-110'/>
                </Link>
                <Link to=''>
                  <BsTwitter className='mb-2 text-xl text-slate-200 cursor-pointer 
                    hover:text-purple-400 transition duration-200 hover:scale-110' />
                </Link>    
              </div>
            </div>
            <div className='lg:my-0 my-4 p-4 lg:basis-[31%] md:basis-[50%] basis-[100%]'>
              <h2 className='text-3xl mb-4 font-medium'>Links</h2>
              <ul className='ml-4'>
                <li className='transition duration-200 ease-linear hover:translate-x-0.5 '> 
                  <Link to='/domiciliary-care' 
                    className='hover:font-medium'>
                    Domiciliary Care
                  </Link>
                </li>
                <li className='transition duration-200 ease-linear hover:translate-x-0.5 '> 
                  <Link to='/palliative-care' 
                    className='hover:font-medium'>
                    Palliative Care
                  </Link>
                </li>
                <li className='transition duration-200 ease-linear hover:translate-x-0.5'>
                  <Link to='/live-in-care' 
                    className='hover:font-medium'>
                    Live-In Care
                  </Link>
                </li>
                <li className='transition duration-200 ease-linear hover:translate-x-0.5'>
                  <Link to='/respite-care' 
                  className='hover:font-medium'>
                    Respite Care
                  </Link>
                </li>
                <li className='transition duration-200 ease-linear hover:translate-x-0.5'>
                  <Link to='/supported-living' 
                  className='hover:font-medium'>
                    Supported Living
                  </Link>
                </li>
              </ul>
            </div>
            <div className='lg:my-0 my-4 p-4 lg:basis-[31%] md:basis-[50%] basis-[100%]'>
              <h2 className='text-3xl mb-4 font-medium'>Contact Details</h2>
              <ul className='ml-4'>
                <li className='flex items-center justify-start mb-3'> 
                  <ImLocation2 className='mr-2 text-2xl'/> 
                  <span>Bizspace Business Centre, Oaks Business Park, S71 1th, Office Number 4</span>
                </li>
                <li className='flex items-center justify-start'>
                  <FaPhoneSquareAlt className='mr-2 text-lg'/> 
                  <span>01226445466 </span>
                </li>
              </ul>
            </div>
          </div>
          <div className='text-white'>
              <p className='text-center'>Fam 24/7 Copyright &copy; 2023 | Developed by Freelance Designers</p>
          </div>
        </section>
        
      </footer>
    
    
    </div>
  )
}

export default Footer
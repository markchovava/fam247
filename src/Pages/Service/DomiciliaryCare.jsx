import React, { useContext } from 'react'
import { MainContext } from '../../Context/MainContext';
/* Import Components */
import ContactFlex from '../../Components/ContactFlex'
import Footer from '../../Components/Footer'
import Title from '../../Components/Title';
import HeaderTop from '../../Components/HeaderTop';
import HeaderNav from '../../Components/HeaderNav';


function DomiciliaryCare() {
  const { setActivePage } = useContext(MainContext);
  setActivePage('service')


  return (
    <div className='bg-slate-100'>
      <HeaderTop />
      <HeaderNav />
      <Title 
        bg='bg__gradientPurple' title='Our Services' />
       <section className='w-full lg:h-[85vh] mt-[2rem] pb-[2rem]'>
        <div 
        className={`h-full lg:flex block items-center justify-start flex-row`}>
          <div className='basis-[45%] h-full flex justify-start items-center'>
            <div className={`h-[85%] w-[110%] overflow-hidden border-white border-[1rem] rounded-tr-[80px] rounded-br-[90px] -ml-[3rem]`}>
              <img src={`./assets/img/services/domiciliary_care.jpg`} className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='basis-[55%] flex justify-start pt-[3rem] lg:pt-0'>
            <div className={`ml-[3rem]`}>
              <div className={`mr-[2.5rem]`}>
                <h1 className='mb-[1.3rem] font-semibold text-4xl'>
                  The <span className='text-purple-800 font-bold drop-shadow-md'>Domicillary Care</span> Services
                </h1>
                <p className='mb-[0.5rem]'>
                  Our domiciliary care team delivers bespoke and person centred care to service users in the comfort of their own home 
                  environment on a one-to-one basis.  <br />
                  Our Company seeks to provide an extensive selection of cost effective, high quality, flexible and responsive home 
                  care services for individuals that require support. 
                </p>
                <p className='mb-[0.5rem]'>
                  As Fam 247 Ltd we believe that everyone is different hence we treat everyone as an individual, respecting the right 
                  of each service user to lead as independent and fulfilling life as possible.  Fam 247 Ltd Domiciliary Care includes 
                  the following services:
                </p>
                <ul className='ml-[1.5rem] list-disc'>
                  <li>Personal Care - Assistance with Activities of Daily Living (ADL's)</li>
                  <li>Assistance with medication</li>
                  <li>Assistance with community and leisure activities</li>
                  <li>Assistance to attend health appointments</li>
                  <li>Domestic Assistance</li>
                  <li>Shopping</li>
                  <li>Companionship / Sit-in service</li>
                  <li>Other Services as identified in the clients’ care plan</li>
                </ul>
              </div>
               
            </div>
          </div>
          
        </div>

      </section>
      <div className='bg-slate-200'>
          <ContactFlex />
      </div>  
      <Footer />
    </div>
  )
}

export default DomiciliaryCare
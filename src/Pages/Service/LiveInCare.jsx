import React, { useContext } from 'react'
import { MainContext } from '../../Context/MainContext';
/* Import Components */
import ContactFlex from '../../Components/ContactFlex'
import Footer from '../../Components/Footer'
import Title from '../../Components/Title';
import HeaderTop from '../../Components/HeaderTop';
import HeaderNav from '../../Components/HeaderNav';


function LiveInCare() {
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
              <img src={`./assets/img/services/live-in.jpg`} className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='basis-[55%] flex justify-start pt-[3rem] lg:pt-0'>
            <div className={`ml-[3rem]`}>
              <div className={`mr-[2.5rem]`}>
                <h1 className='mb-[1.3rem] font-semibold text-4xl'>
                  The <span className='text-purple-800 font-bold drop-shadow-md'>Live-In Care</span> Services
                </h1>
                <p className='mb-[0.5rem]'>
                  Our Live-in care service is for those who need more support or 24-hour care but wish to stay 
                  in their own home rather than move to a care home.  Fam247 provides a tailored service to 
                  suit the requirements of the individual receiving care and their family.
                </p>
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

export default LiveInCare
import React, { useContext } from 'react'
import { MainContext } from '../../Context/MainContext';
/* Import Components */
import ContactFlex from '../../Components/ContactFlex'
import Footer from '../../Components/Footer'
import Title from '../../Components/Title';
import HeaderTop from '../../Components/HeaderTop';
import HeaderNav from '../../Components/HeaderNav';


function SupportedLiving() {
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
              <img src={`./assets/img/services/elderly.jpg`} className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='basis-[55%] flex justify-start pt-[3rem] lg:pt-0'>
            <div className={`ml-[3rem]`}>
              <div className={`mr-[2.5rem]`}>
                <h1 className='mb-[1.3rem] font-semibold text-4xl'>
                  The <span className='text-purple-800 font-bold drop-shadow-md'>Supported Living</span> Services
                </h1>
                <p className='mb-[0.5rem]'>
                Our homes vary in sizes, with each one offering a safe, 
                secure and progressive support environment for young adults. 
                The level of support offered to each young person varies 
                and is regularly reviewed to suit the young person’s needs. 
                All our Leaving Care and Supported Living accommodation are 
                staffed 24/7, day and night.
                </p>
                <p className='mb-[0.5rem]'>
                  <span className='font-semibold text-lg'>
                  Single Accommodation
                  </span> <br />
                  Accommodation in a solo supported living placement with 
                  high level support as required. This includes 24/7 support and supervision.
                </p>
                <p className='mb-[0.5rem]'>
                  <span className='font-semibold text-lg'>
                    Shared Accommodation
                  </span> <br />
                  Accommodation in a high quality multi bedded supported living 
                  placement with 24/7 face to face staffing and the option to reduce 
                  support as required.
                </p>
                <p>
                  <span className='font-semibold text-lg'>
                  Home away from home
                  </span> <br />
                  Our homes are different, the support we provide gives young people 
                  the confidence and freedom to make decisions about their life in a safe, 
                  supportive and caring environment. Every young person will have their
                  own private furnished bedroom, with shared communal areas lounge, kitchen and garden.
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

export default SupportedLiving
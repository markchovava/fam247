import React, { useContext } from 'react'
import { MainContext } from '../../Context/MainContext';
/* Import Components */
import ContactFlex from '../../Components/ContactFlex'
import Footer from '../../Components/Footer'
import Title from '../../Components/Title';
import HeaderTop from '../../Components/HeaderTop';
import HeaderNav from '../../Components/HeaderNav';


function PalliativeCare() {
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
              <img src={`./assets/img/services/palliative.jpg`} className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='basis-[55%] flex justify-start pt-[3rem] lg:pt-0'>
            <div className={`ml-[3rem]`}>
              <div className={`mr-[2.5rem]`}>
                <h1 className='mb-[1.3rem] font-semibold text-4xl'>
                  The <span className='text-purple-800 font-bold drop-shadow-md'>Palliative Care</span> Services
                </h1>
                <p className='mb-[0.5rem]'>
                  People who are nearing the end of their life and those who require 
                  palliative care due to a life-limiting illness may want to remain at home 
                  for their final days. That’s where we can come in, to help you to have 
                  a good quality of life in the time you have left.
                </p>
                <p className='mb-[0.5rem]'>
                    We regularly work alongside continuing healthcare teams, district nurses, 
                    hospices and other local support groups to offer the right level of home care. 
                    We are able to provide fast-track palliative care at the last minute.
                </p>
                <p className='mb-[0.5rem]'>
                  <span className='font-semibold text-lg'>
                    What is Palliative Care?
                  </span> <br />
                  Palliative care is treatment, care and support for people with a life-limiting illness, 
                  and their family and friends. It’s sometimes called ‘supportive care’
                </p>
                <p className=''>
                <span className='font-semibold text-lg'>
                  What is End of Life Care?
                  </span> <br />
                  End of life care involves treatment, care and support for people who are nearing the end 
                  of their life. It’s an important part of palliative care.
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

export default PalliativeCare
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../../../Context/MainContext';

function TextLeft() {
  const { activePage } = useContext(MainContext);

    
  return (
    <>
      <section className='relative w-full lg:h-[85vh] mt-[2rem] pb-[2rem]'>
        <div 
          className={`h-full lg:flex block items-center justify-start flex-row-reverse`}>
          <div className='lg:basis-[45%] basis-[100%] h-full flex justify-start items-center'>
            <div className={`h-[85%] w-[110%] overflow-hidden border-white border-[1rem] 
            'rounded-tl-[80px] rounded-bl-[90px] -mr-[3rem]`}>
              <img src={`./assets/img/about/hands.jpg`} className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='lg:basis-[55%] flex justify-start pt-[3rem] lg:pt-0'>
            <div className={`'mr-[3rem]`}>
              <div className={`mx-[2.5rem]`}>
                <h1 className='mb-[1.3rem] text-purple-800 font-bold text-[2.5rem]'>
                  About Us
                </h1>
                <p className='mb-[0.5rem]'>
                  Fam247 Ltd is a family run independent care provider based in Yorkshire committed to delivering exceptional person 
                  centred care to service users in the comfort of their own home environment. <br />
                  Our main aim is to ensure that the independence and dignity of all our service users is optimised, through engaging a 
                  highly experienced team of competent healthcare professionals  to help us ensure that a comprehensive range of high 
                  quality care and welfare services, each delivered to meet specific individual needs.
                </p>
                <p className='mb-[0.5rem]'>
                  We specialise in people with learning disabilities, end of life, mental health and nursing care. All our staffs are in 
                  house trained and have extensive experience working with adults with physical, mental and learning disability, Elderly 
                  including adults with dementia and palliative care as well as end of life and mental health. <br />
                  We can source staff on a temporary or a permanent basis. We give the opportunity tour staff to try a job on a temporary 
                  basis before committing to a full-time role. We do this to enhance your care experience to be provided by a member of 
                  staff who does what they love. <br />
                  As a Service Provider we are regulated by the Care Quality Commission(CQC) the independent regulator of Health and Social 
                  Care in England.
                </p>
                { activePage == 'home' ? (
                  <Link to='/about' 
                    className='px-5 pt-2 pb-3 text-2xl border border-[#181739] hover:bg-[#181739] hover:text-white transition rounded-lg text-[#181739]'>
                    About Us
                  </Link>
                ) : (
                  ''
                )}
                
              </div>
              
            
            </div>
          </div>
          
        </div>

      </section>
    </>
  )
}

export default TextLeft
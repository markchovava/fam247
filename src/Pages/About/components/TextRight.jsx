import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../../../Context/MainContext';

function TextRight() {
  const { activePage } = useContext(MainContext);

    
  return (
    <>
      <section className='relative w-full lg:h-[85vh] mt-[2rem] pb-[2rem]'>
        <div 
          className={`h-full lg:flex block items-center justify-start flex-row`}>
          <div className='lg:basis-[45%] basis-[100%] h-full flex justify-start items-center'>
            <div className={`h-[85%] w-[110%] overflow-hidden border-white border-[1rem] rounded-tr-[80px] rounded-br-[90px] -ml-[3rem]`}>
              <img src={`./assets/img/about/hands.jpg`} className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='lg:basis-[55%] flex justify-start pt-[3rem] lg:pt-0'>
            <div className={`ml-[3rem]`}>
              <div className={`mr-[2.5rem]`}>
                <h1 className='mb-[1.3rem] text-purple-800 font-bold text-[2.5rem]'>
                  Our vision
                </h1>
                <p className='mb-[0.5rem]'>
                  Is to promote the delivery of person centred care and support services which embraces the diversity of our service users 
                  and empowers them to preserve their dignity, independence and choice whilst receiving the service delivery they require. 
                </p>
                <p> 
                  <div className='font-bold'>Why clients choose us…</div>
                  There are so many reasons to choose Fam247 Ltd.
                  <ul className='ml-[1.5rem] list-disc'>
                    <li>Consistency and continuity of staff</li>
                    <li>We offer a free consultation</li>
                    <li>Effective quality assurance practices</li>
                    <li>We are here for you 24 hours a day, 7 days a week</li>
                  </ul>     
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

export default TextRight
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../Context/MainContext';

function FlexTwo({ifExists, content}) {
  const { activePage } = useContext(MainContext);

    
  return (
    <>
      <section className='relative w-full lg:h-[85vh] mt-[2rem] pb-[2rem]'>
        <div 
          className={`h-full lg:flex block items-center justify-start ${ifExists ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className='lg:basis-[45%] basis-[100%] h-full flex justify-start items-center'>
            <div className={`h-[85%] w-[110%] overflow-hidden border-white border-[1rem] 
            ${ifExists ? 'rounded-tl-[80px] rounded-bl-[90px] -mr-[3rem]' : 'rounded-tr-[80px] rounded-br-[90px] -ml-[3rem]'}`}>
              <img src={`./assets/img/slides/${content.img}`} className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='lg:basis-[55%] flex justify-start pt-[3rem] lg:pt-0'>
            <div className={`${ifExists ? 'mr-[3rem]' : 'ml-[3rem]'}  `}>
              <div className={`${ifExists ? 'ml-[2.5rem]' : 'mr-[2.5rem]'} `}>
                <h1 className='mb-[1.5rem] text-purple-800 font-semibold text-4xl'>
                   {content.title}   
                </h1>
                <p className='mb-[2rem]'>
                  {content.description}
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

export default FlexTwo
import React from 'react'

function FlexTwoService({ifExists, description, title}) {
  return (
    <>
      <section className='w-full lg:h-[85vh] mt-[2rem] pb-[2rem]'>
        <div 
        className={`h-full lg:flex block items-center justify-start ${ifExists ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className='basis-[45%] h-full flex justify-start items-center'>
            <div className={`h-[85%] w-[110%] overflow-hidden border-white border-[1rem] 
            ${ifExists ? 'rounded-tl-[80px] rounded-bl-[90px] -mr-[3rem]' : 'rounded-tr-[80px] rounded-br-[90px] -ml-[3rem]'}`}>
              <img src={`./assets/img/slides/baby.jpg`} className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='basis-[55%] flex justify-start pt-[3rem] lg:pt-0'>
            <div className={`${ifExists ? 'mr-[3rem]' : 'ml-[3rem]'}  `}>
              <div className={`${ifExists ? 'ml-[2.5rem]' : 'mr-[2.5rem]'} `}>
                <h1 className='mb-[1.5rem] text-purple-800 font-semibold text-4xl'>The 
                  <span className='text-purple-800 font-bold drop-shadow-md'> {title} </span> 
                  Services
                </h1>
                <p className='mb-[2rem]'>
                  {description}
                </p>
              </div>
               
            </div>
          </div>
          
        </div>

      </section>
    </>
  )
}

export default FlexTwoService
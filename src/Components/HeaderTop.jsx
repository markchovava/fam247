import React from 'react'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { ImFacebook2, ImLocation2, ImTwitter } from 'react-icons/im'

function HeaderTop() {
  return (
    <>
      <section className='w-full h-auto bg-[#0c0b1f] text-white'>
        <div className='container max-w-screen-xl mx-auto '>
          <section className='md:flex block justify-between items-center text-sm py-3'>
            <div className='md:flex block flex-1 justify-start items-center '>
              <div className='flex items-center lg:my-0 my-3 '>
                <FaPhoneSquareAlt className='mr-1'/>
                  01226445466
              </div>
              <div className='flex items-center lg:ml-4 lg:my-0 my-3 '>
                <ImLocation2 className='mr-1'/>
                  Bizspace Business Centre, Oaks Business Park, 
                  S71 1TH, Office Number 4
              </div>
            </div>
            <div className='flex justify-start lg:justify-end items-center lg:my-0 my-3'>
              <ImFacebook2 className='mx-2 hover:text-[#a2e243] transition cursor-pointer' />
              <ImTwitter className='mx-2 hover:text-[#a2e243] transition cursor-pointer' />
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default HeaderTop
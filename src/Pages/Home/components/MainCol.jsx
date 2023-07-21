import React from 'react'
import { Link } from 'react-router-dom'

function MainCol({img, title, link}) {
  return (
    <>
        <section className='shadow-lg bg-white shadow-1 p-5 rounded-lg rounded-tl-[80px] rounded-br-[80px] 
              w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
              <div className='rounded-tl-[80px] rounded-br-[80px] overflow-hidden'>
                <img src={`./assets/img/services/${img}`} className='w-full h-full object-cover' />
              </div>
              <div className='mt-3 mb-2'>
                <h2 className='text-xl font-semibold mb-4'>{title}</h2>
                <Link to={link} className='mt-[2rem] pb-3 pt-2 px-4 bg-green-500 text-white rounded-xl hover:bg-green-700 transition hover:-translate-y-1'>
                    More Info
                </Link>
              </div>
          </section>
    </>
  )
}

export default MainCol
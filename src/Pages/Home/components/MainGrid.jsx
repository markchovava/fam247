import React from 'react'
import MainCol from './MainCol'
import ServicesData from '../../../data/ServicesData.json'

function MainGrid() {
  const services = ServicesData

  return (
    <>
      <section className='w-full h-auto pt-[4rem] pb-[2rem]'>
        <div className='container max-w-screen-xl mx-auto'>
          <section className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10'>
          {
            services.map((service) => (
              <MainCol img={service.img} title={service.title} link={service.link} />
            ))
          }
          </section>
        </div>
      </section>
    </>
  )
}

export default MainGrid
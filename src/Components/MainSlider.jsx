import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { Link } from 'react-router-dom';

function MainSlider() {
  return (
    <>
      <section className='w-full h-auto'>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        navigation
        effect
        speed={1000}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        className='swiper__main'
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)} >
        <SwiperSlide>
          <div className='w-full h-[86vh] bg-cover bg-gradient-to-br from-yellow-200 to-green-500'>
            <section className='h-full flex items-center justify-start'>
              <div className='basis-[45%] flex justify-end'>
                <div className='text-right'>
                  <h1 className='text-right mr-[2rem] mb-[2rem] text-[#181739] font-semibold lg:text-6xl text-3xl'>
                    Welcome to <br /> 
                    <span className='text-white font-bold drop-shadow-lg lg:text-7xl text-4xl'>
                      Fam247
                    </span> <br /> 
                    Website
                  </h1>
                  <Link to='/service' 
                  className='mr-[2rem] px-5 pt-2 pb-3 text-2xl border border-[#181739] hover:bg-[#181739] hover:text-white transition rounded-lg text-[#181739]'>
                    Our Services
                  </Link>
                </div>
              </div>
              <div className='basis-[55%] h-full flex justify-end items-center'>
                <div className='h-[85%] w-[110%] rounded-tl-[80px] rounded-bl-[90px] overflow-hidden border-white border-[1rem] -mr-[3rem]'>
                  <img src={`./assets/img/slides/baby.jpg`} className='w-full h-full object-cover' />
                </div>
              </div>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-[86vh] bg-cover bg-gradient-to-br from-pink-200 to-pink-500'>
            <section className='h-full flex items-center justify-start'>
              <div className='basis-[45%] flex justify-end'>
                <div className='text-right'>
                  <h1 className='text-right mr-[2rem] mb-[2rem] text-[#181739] font-semibold lg:text-6xl text-3xl'>
                    We are here<br /> 
                    <span className='text-white lg:text-7xl text-4xl font-bold drop-shadow-lg'> to help, </span> <br /> 
                     talk to us.
                  </h1>
                  <Link to='/contact' 
                  className='mr-[2rem] px-5 pt-2 pb-3 text-2xl border border-[#181739] hover:bg-[#181739] hover:text-white transition rounded-lg text-[#181739]'>
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className='basis-[55%] h-full flex justify-end items-center'>
                <div className='h-[85%] w-[110%] rounded-tl-[80px] rounded-bl-[90px] overflow-hidden border-white border-[1rem] -mr-[3rem]'>
                  <img src={`./assets/img/slides/elderly.jpg`} className='w-full h-full object-cover' />
                </div>
              </div>
            </section>
          </div>
        </SwiperSlide>
       
      </Swiper>
      </section>
    </>
  )
}

export default MainSlider
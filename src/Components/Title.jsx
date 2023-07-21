import React from 'react'

function Title({title, bg}) {
  return (
    <>
        <section className={`${bg} w-full h-auto pt-[4rem] pb-[4rem]`}>
            <div className='container max-w-screen-xl mx-auto'>
                <section className='flex items-center justify-center'>
                    <h1 className=' text-[4rem] font-bold'>{title}</h1>
                </section>
            </div>
        </section>
    </>
  )
}

export default Title
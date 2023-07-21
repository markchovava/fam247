import React from 'react'

function ContactFlex() {
  return (
    <>
        <section className='w-full h-auto pt-[4rem] pb-[4rem]'>
            <div className='container mx-auto max-w-screen-xl p-4 lg:p-0'>
            <div className='flex flex-col lg:flex-row'>
                    <div className='basis-[40%] flex flex-col lg:ml-5 xl:ml-[90px] items-center lg:items-start 
                        text-center lg:text-left justify-center flex-1 px-4'>
                         <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
                            <span className='text-[#181739]'>Contact</span> Details
                        </h1>
                        <p className='mx-w-[480px] mb-8'>
                            <ul className='ml-4'>
                                <li>
                                    Address: 
                                    <span className='text-purple-900 font-semibold ml-1'>
                                    Bizspace Business Centre, Oaks Business Park, S71 1th, Office Number 4
                                    </span>
                                </li>
                                <li>
                                    Phone: 
                                    <span className='text-purple-900 font-semibold ml-1'>01226445466</span>
                                </li>
                                <li>
                                    Email: 
                                    <span className='text-purple-700 font-semibold ml-1'>admin@fam247.org.uk</span>
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className='basis-[60%] lg:mr-5 xl:mr-[90px] flex flex-col items-center lg:items-start 
                        text-center lg:text-left justify-center flex-1 px-4'>
                        <form action='' className='flex flex-col gap-y-4 w-full'>
                            <h2 className='text-4xl lg:text-[58px] font-semibold mb-4'>
                                <span className='text-purple-900'>Write</span> to Us
                            </h2>
                            <input type='text' placeholder='What services do you want?*'
                                className='border border-gray-300 focus:border-[#181739] outline-none rounded w-full px-4 h-14 text-sm' />
                            <input type='text' placeholder='Name*'
                                className='border border-gray-300 focus:border-[#181739] outline-none rounded w-full px-4 h-14 text-sm' />
                            <input type='text' placeholder='Email*'
                                className='border border-gray-300 focus:border-[#181739] outline-none rounded w-full px-4 h-14 text-sm' />
                            <textarea name='' placeholder='Message*'
                                defaultValue='We need our roads repaired...'
                                className='border border-gray-300 focus:border-[#181739] outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400'></textarea>
                            <div className='flex gap-x-2'>
                                <button 
                                className='bg-purple-900 hover:bg-purple-950 text-white rounded p-4 text-sm w-full transition'>
                                Send message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ContactFlex
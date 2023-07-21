import React, { useContext, useState } from 'react'
import { MainContext } from '../Context/MainContext';
import { Link } from 'react-router-dom'
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';


function Navbar() {
    const { activePage } = useContext(MainContext);
    const [isOpen, setIsOpen] = useState(false)

  return (
    <>
        <nav>
            <ul className='hidden lg:flex items-center justify-start gap-8 mr-[4rem]'>
                <li className='relative'>
                    <Link to='/' 
                        className={`${activePage == "home" ? "border-b text-purple-300 border-purple-300" : ""}
                        transition flex justify-between items-center pb-4 hover:border-b hover:text-purple-300 hover:border-purple-300`}>
                        Home
                    </Link>
                </li>
                <li className='relative'>
                    <Link to='/about' 
                        className={`${activePage == "about" ? "border-b text-purple-300 border-purple-300" : ""}
                        transition flex justify-between items-center pb-4 hover:border-b hover:text-purple-300 hover:border-purple-300`}>
                        About Us
                    </Link>
                </li>
                <li className='relative'>
                    <Link to='#' onClick={() => ( setIsOpen(!isOpen) )}
                        className={`${activePage == "service" ? "border-b text-purple-300 border-purple-300" : ""}
                        transition flex justify-between items-center pb-4 hover:border-b hover:text-purple-300 hover:border-purple-300`}>
                        Our Services
                        { isOpen || activePage == 'service' ?  (
                            <RiArrowDownSLine className='ml-2' />
                            ) : (
                                <RiArrowUpSLine className='ml-2' />
                            )
                        }
                    </Link>
                    <ul className={`absolute z-10 bg-opacity-8 pt-3 top-[3.5rem] bg-[#181739] text-sm -ml-[1rem] h-auto w-[140%]
                        ${ isOpen ? '' : 'hidden'}
                        `}>
                        <li className='pb-3'>
                            <Link to='/domiciliary-care' onClick={() => ( setIsOpen(!isOpen) )}
                            className={`px-3 py-1 hover:text-purple-300`}>Domiciliary Care</Link>
                        </li>
                        <li className='pb-3'>
                            <Link to='/live-in-care' onClick={() => ( setIsOpen(!isOpen) )}
                            className={`px-3 py-1 hover:text-purple-300`}>Live-In Care</Link>
                        </li>
                        <li className='pb-3'>
                            <Link to='/palliative-care' onClick={() => ( setIsOpen(!isOpen) )}
                            className={`px-3 py-1 hover:text-purple-300`}>Palliative Care</Link>
                        </li>
                        <li className='pb-3'>
                            <Link to='/respite-care' onClick={() => ( setIsOpen(!isOpen) )}
                            className={`px-3 py-1 hover:text-purple-300`}>Respite Care</Link>
                        </li>
                        <li className='pb-3'>
                            <Link to='/supported-living' onClick={() => ( setIsOpen(!isOpen) )}
                            className={`px-3 py-1 hover:text-purple-300`}>Supported Living</Link>
                        </li>
                    </ul>
                </li>
                <li className='relative'>
                    <Link to='/contact' 
                        className={`${activePage == "contact" ? "border-b text-purple-300 border-purple-300" : ""} 
                        transition flex justify-between items-center pb-4 hover:border-b hover:text-purple-300 hover:border-purple-300`}>
                        Contact Us
                    </Link>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
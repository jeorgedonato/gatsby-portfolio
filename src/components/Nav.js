import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { Link } from '@reach/router'

const Nav = () => {

    const [isActive, setActive] = useState(false)

    return (
        <>
            <nav className='flex flex-row py-6 px-10 gap-x-16 bg-darkBlue text-white items-center justify-between md:justify-start'>
                <div>
                    <span className='font-bold text-xl md:text-2xl'>Jeorge Donato</span>
                </div>
                <div>
                    <div className='text-xl cursor-pointer'>
                        <ul 
                            className='flex flex-col md:flex-row gap-x-4 list-none absolute md:relative z-10 h-1/3 w-full left-0 items-center align-center place-content-center gap-y-4 top-16 md:top-0 bg-darkBlue'
                        >
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/skills">Skills</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                        </ul>
                        {/* Desktop */}
                        {/* <ul 
                            className='hidden md:flex flex-row gap-x-4 list-none z-10 h-1/3 w-full items-center align-center place-content-center'
                        >
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/skills">Skills</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                        </ul> */}
                        <div className='cursor-pointer text-2xl' role='button' tabIndex={0} onClick={() => setActive(!isActive)}>
                        {
                            isActive ? 
                                <IoMdClose className='block md:hidden' /> :
                                <GiHamburgerMenu className='block md:hidden' />
                                
                        }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )   
}

export default Nav
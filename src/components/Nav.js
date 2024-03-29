import React, { useState, useRef, useEffect, useContext } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { Link } from '@reach/router'
import { AppContext } from '../context/siteContext'

const Nav = () => {

    const [ navHeight, setNavHeight ] = useContext(AppContext)

    const [isActive, setActive] = useState(false)
    const navRef = useRef(null)

    useEffect(() => {
        setNavHeight(navRef.current?.clientHeight)
    }, []);

    return (
        <>
            <nav ref={navRef} className='flex flex-row py-6 px-10 md:px-24 gap-x-16 bg-darkBlue text-white items-center justify-between md:justify-start'>
                <div>
                    <span className='font-bold text-xl md:text-2xl'><Link to="/">Jeorge Donato</Link></span>
                </div>
                <div>
                    <div className='text-xl cursor-pointer'>
                        <ul 
                            className= {`flex flex-col md:flex-row gap-x-4 list-none absolute md:relative z-10 w-full left-0 items-center align-center place-content-center gap-y-4 top-16 md:top-0 bg-darkBlue transition delay-75 duration-300 ease-in-out py-8 md:py-0 ${isActive ? 'translate-x-0 md:transform-none' : 'translate-x-full md:transform-none'}`}
                        >
                            <li><Link to="/" onClick={() => setActive(false)}>Home</Link></li>
                            <li><Link to="/about" onClick={() => setActive(false)}>About</Link></li>
                            <li><Link to="/skills" onClick={() => setActive(false)}>Skills</Link></li>
                            <li><Link to="/portfolio" onClick={() => setActive(false)}>Portfolio</Link></li>
                        </ul>
                        <div className='cursor-pointer text-2xl' role='button' tabIndex={0} onClick={() => setActive(!isActive)}>
                        {
                            isActive ? 
                                <IoMdClose className='block md:hidden transition' /> :
                                <GiHamburgerMenu className='block md:hidden transition' />
                        }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )   
}

export default Nav
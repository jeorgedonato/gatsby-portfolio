import React from 'react'
import { FaPhoneSquare, FaEnvelope, FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <>
            <footer className='flex justify-center items-center flex-col p-4 gap-y-4 bg-darkBlue text-white'>
				<p className='flex flex-row gap-x-4'>
					<a href='tel:7144682863' className='hover:scale-125 transition'>
						<FaPhoneSquare className='text-2xl' />
					</a>
					<a href='mailto:jeorgekhenr@gmail.com' className='hover:scale-125 transition'>
						<FaEnvelope className='text-2xl' />
					</a>
					<a
						href='https://www.linkedin.com/in/jeorgejdonato/'
						target='_blank'
						rel='noreferrer'
						className='hover:scale-125 transition'
					>
						<FaLinkedin className='text-2xl' />
					</a>
					<a
						href='https://github.com/jeorgedonato'
						target='_blank'
						rel='noreferrer'
						className='hover:scale-125 transition'
					>
						<FaGithubSquare className='text-2xl' />
					</a>
				</p>
				<span className='font-bold text-lg'>© by Jeorge Janil Donato {year}</span>
			</footer>
        </>
    )
}

export default Footer
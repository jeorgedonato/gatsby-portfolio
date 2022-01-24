import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Home = () => {
    return (
        <>
            <section className='flex flex-row justify-center items-center h-full w-full relative'>
                <div className='w-1/2'></div>
                <div className='w-1/2'>
                    <StaticImage 
                        className='rounded-full'
                        src={`../images/profilepic.jpg`} 
                        alt="Jeorge Donato" 
                        width={300}
                        height={300}
                        layout="constrained"
                        placeholder='dominantColor'
                        quality={100}
                    />
                </div>
            </section>
        </>
    )
}


export default Home
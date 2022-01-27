import React from "react";
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
    return (
        <>
            <article className='py-6'>
                <div className="py-10 text-center font-bold text-4xl mb-4">About Me</div>
                <div className="py-4 flex flex-col relative items-center gap-y-4">
                    <div className='w-1/2 relative flex items-center w-full'>
                        <p className="p-6 container text-center text-lg leading-relaxed w-full">
                        An experienced full-stack web developer who is passionate about writing clean and concise codes throughout the development lifecycle. Recognized by peers as a strong and collaborative team player. Excited to be a part of a quality-driven, collaborative work environment where I can leverage my background and skill set.<br /><br />
                        I am currently working as a Web Developer at Premier Print Source Inc.<br /><br />

                        Located in Anaheim, CA. I am currently looking for new Web Development opportunities.
                        </p>
                    </div>
                    <div className='w-1/2 justify-center relative flex order-first '>
                        <StaticImage 
                            className='rounded-lg md:rounded-full'
                            src={`../images/profilepic.jpg`} 
                            alt="Jeorge Donato" 
                            width={300}
                            height={300}
                            layout="fixed"
                            placeholder='dominantColor'
                            quality={100}
                        />
                    </div>
                </div>
            </article>
        </>
    )
}

export default About
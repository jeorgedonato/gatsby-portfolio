import React, {useContext} from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import { AppContext } from '../context/siteContext'
import { useTransition, animated } from 'react-spring'

const Home = () => {

    const {file} = useStaticQuery(
        graphql`
        query homeBgQuery {
            file(relativePath: {eq: "busy-street.jpg"}) {
                id
                childImageSharp {
                gatsbyImageData(webpOptions: {quality: 70}, quality: 70, width: 2000, placeholder: BLURRED)
                }
            }
        }
        `
    )

    const [ navHeight ] = useContext(AppContext)

    const pluginImage = getImage(file)

    return (
        <>
            <BgImage image={pluginImage} style={{ height: `calc(100vh - ${navHeight}px)`, width: `100%` }} >
                <div className="z-10 relative w-full h-full flex flex-col justify-center items-center gap-y-6 font-poppins text-white select-none">
                    <h1 className="intro-text font-bold text-3xl md:text-5xl relative">Hi! I'm Jeorge Donato</h1>
                    <div className="animation-text font-bold text-xl md:text-3xl relative">
                        <span className="text-1st overflow-hidden inline-block relative">A Full Stack Web Developer</span>
                        <span className="text-2nd overflow-hidden inline-block relative">A Software Engineer</span>
                    </div>
                </div>

                <div className='bg-gray-700 absolute top-0 left-0 w-full h-full bg-opacity-50'></div>
            </BgImage>
        </>
    )
}


export default Home
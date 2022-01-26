import React, {useContext} from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import { AppContext } from '../context/siteContext'

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
            <BgImage image={pluginImage} style={{ height: `calc(100vh - ${navHeight}px)`, width: `100%` }}>
                <div>Hello from BgImage!</div>
            </BgImage>
        </>
    )
}


export default Home
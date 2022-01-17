import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import Nav from "./Nav";

const Header = () => {

    const { site } = useStaticQuery(
        graphql`
        query {
            site {
                siteMetadata 
                {
                    siteUrl
                    siteTitleAlt
                    siteDescription
                    siteTitle
                    siteAuthor
                }
            }
        }
        `
    )

    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>{site.siteMetadata.siteTitle}</title>
                <meta property="og:title" content={site.siteMetadata.siteTitle} />
                <meta name="author" content={site.siteMetadata.siteAuthor} />
                <meta property="og:url" content={site.siteMetadata.siteUrl} />
                <meta property="og:locale" content="en_US" />
                <meta name="description" content={site.siteMetadata.siteDescription} />
                <meta property="og:description" content={site.siteMetadata.siteDescription} />
            </Helmet>
            <Nav />
        </>
    )
}

export default Header
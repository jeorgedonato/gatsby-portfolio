import * as React from "react"
import '../styles/index.css'
import Layout from '../components/Layout'
import { graphql } from "gatsby"

// markup
const IndexPage = ({ data }) => {
  const pageData = data?.site?.siteMetaData ? data.site.siteMetaData : {}
  return (
    <>
      <Layout>
        <span className="font-bold text-2xl">Hello World!</span>
      </Layout>
    </>
  )
}

export default IndexPage

export const PageQuery = graphql`query PageQuery {
  site {
    siteMetadata {
      title
      siteUrl
      siteTitleAlt
      siteDescription
      siteTitle
      description
      author
    }
  }
}
`

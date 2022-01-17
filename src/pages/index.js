import * as React from "react"
import '../styles/index.scss'
import Layout from '../components/Layout'
import { Router } from '@reach/router'

const About       = React.lazy(() => import("../components/About")) 
const Portfolio   = React.lazy(() => import("../components/Portfolio")) 
const Skills      = React.lazy(() => import("../components/Skills")) 

// markup
const IndexPage = () => {
  return (
    <>
        <Layout>
          <React.Suspense>
            <Router>
              <About path="/about" />
              <Portfolio path="/portfolio" />
              <Skills path="/skills" />
            </Router>
          </React.Suspense>
        </Layout>
    </>
  )
}

export default IndexPage



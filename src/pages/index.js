import * as React from "react"
import '../styles/index.scss'
import Layout from '../components/Layout'
import { Router } from '@reach/router'
import Home from '../components/Home'


// const Home = React.lazy(() => import('../components/Home'));
const About = React.lazy(() => import('../components/About'));
const Portfolio = React.lazy(() => import('../components/Projects'));
const Skills = React.lazy(() => import('../components/Skills'));

const LazyComponent = ({ Component, ...props }) => (
  <React.Suspense fallback={'<p>Loading...</p>'}>
    <Component {...props} />
  </React.Suspense>
);

// markup
const IndexPage = () => {
  return (
    <>
        <Layout>
          <Router>
            <Home path="/" />
            {/* <LazyComponent Component={Home} path="/" /> */}
            <LazyComponent Component={About} path="about" />
            <LazyComponent Component={Portfolio} path="portfolio" />
            <LazyComponent Component={Skills} path="skills" />
          </Router>
        </Layout>
    </>
  )
}

export default IndexPage



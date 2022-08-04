import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"

import Slider from '../components/About/Slider'
import AboutText from '../components/About/AboutText'

const About = () => {
  return (
    <Layout>
      <Seo title="About" />
      <Slider />
      <AboutText />
    </Layout>
  )
}

export default About
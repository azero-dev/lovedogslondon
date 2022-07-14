import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => {
  return (
    <Layout>
      <Seo title="About" />
      <div style={{ height: "200vh" }}>
        <p>Hey! Esto es un texto de prueba</p>
      </div>
    </Layout>
  )
}

export default About
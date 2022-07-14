import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Gallery() {
  return (
    <Layout>
      <Seo title="Gallery" />
      <div style={{ height: "200vh" }}>
        <p>Hey! Esto es un texto de prueba</p>
      </div>
    </Layout>
  )
}
import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Contact() {
  return (
    <Layout>
      <Seo title="Contact us" />
      <div style={{ height: "200vh" }}>
        <p>Hey! Esto es un texto de prueba</p>
      </div>
    </Layout>
  )
}
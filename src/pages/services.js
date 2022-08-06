import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import ServicesComponent from '../components/ServicesComponent/index'

export default function Services() {
  return (
    <Layout>
      <Seo title="Services" />
      <ServicesComponent />
    </Layout>
  )
}
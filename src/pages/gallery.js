import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import GalleryComp from '../components/Gallery'

export default function Gallery() {
  return (
    <Layout>
      <Seo title="Gallery" />
      <GalleryComp />
    </Layout>
  )
}
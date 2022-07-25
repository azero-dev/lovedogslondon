import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Slider from '../components/Home/Slider'
import Intro from '../components/Home/Intro'
import MiniGallery from '../components/Home/MiniGallery'
import MiniServices from '../components/Home/MiniServices'


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Slider/>
    <MiniServices/>
    <MiniGallery/>
    <Intro/>
  </Layout>
)

export default IndexPage

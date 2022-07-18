import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Slider from '../components/Home/Slider'


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Slider></Slider>
  </Layout>
)

export default IndexPage

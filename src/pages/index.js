import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <p>Hey! Esto es un texto de prueba</p>
    </div>
  </Layout>
)

export default IndexPage

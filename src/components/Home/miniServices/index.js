import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { Container, SafeBox, Box } from './MiniServicesElements'
import Text from '../../Text/index'

const MiniServices = () => {
  //Query images
  const services = useStaticQuery(graphql`
    query Services {
      allFile(filter: { relativeDirectory: { eq: "services" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1, placeholder: TRACED_SVG)
            }
            name
          }
        }
      }
    }
  `)
  const servicesPics = services.allFile.edges

  return (
    <Container>
      <Text>
        <h1>Our services</h1>
      </Text>
      <SafeBox>
        {servicesPics.map((elem, index) => {
          return (
            <Link to={"/services#" + elem.node.name} key={index}>
              <Box>
                <GatsbyImage image={ elem.node.childImageSharp.gatsbyImageData } alt="" />
                <Text><h2>{elem.node.name}</h2></Text>
              </Box>
            </Link>
          )
        }).reverse()}
      </SafeBox>
    </Container>
  )
}

export default MiniServices
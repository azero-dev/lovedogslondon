import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage  } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { Container, SafeBox, Box } from './MiniServicesElements'
import Text from '../../Text/index'

const MiniServices = () => {

  //Query images
  const services = useStaticQuery(graphql`
    query GettingSergices {
      allFile(filter: {relativeDirectory: {eq: "services"}}, sort: {order: DESC}) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1, placeholder: BLURRED)
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
      {/* <Text>
        <h1>Services</h1>
      </Text> */}
      <SafeBox>
        {servicesPics.map(elem => {
          return (
            <Link to={"/services#" + elem.node.name}>
              <Box>
                <GatsbyImage image={ elem.node.childImageSharp.gatsbyImageData } alt={ elem.node.id } />
                {console.log(elem)}
                <Text><h1>{elem.node.name}</h1></Text>
              </Box>
            </Link>
          )
        })}
      </SafeBox>
    </Container>
  )
}

export default MiniServices
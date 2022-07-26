import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { Container, Box } from './MiniGalleryElements'

const MiniGallery = () => {

  //Query images
  const pictures = useStaticQuery(graphql`
    query gettingSomePics {
      allFile(filter: {relativeDirectory: {eq: "minigallery"}}) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1)
            }
          }
        }
      }
    }
  `)
  const pics = pictures.allFile.edges

  return (
    <Container>
      {pics.map((elem, index) => {
        return (
          <Link to="/gallery" key={index}>
            <Box>
              <GatsbyImage image={ elem.node.childImageSharp.gatsbyImageData } alt="" />
            </Box>
          </Link>
        )
      })}
    </Container>
  )
}

export default MiniGallery
import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import { useState } from 'react'
import { Link } from 'gatsby'
import { Wrapper, Container, Box } from './GalleryElements'
import Text from '../Text/index'
import Viewer from './Viewer/index'
import { useEffect } from 'react'

const GalleryComp = () => {
  //Query images
  const GalleryPictures = useStaticQuery(graphql`
    query GettingImgGallery {
      allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
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
  const pics = GalleryPictures.allFile.edges

  //Viewer toggler
  const [viewerActive, setViewerActive] = useState(false)
  const viewerToggler = () => {
    setViewerActive(!viewerActive)
  }

  //Set pictureviewer 
  const [sendpicture, setSendpicture] = useState("")

  //Keep background fixed while viewer open
  useEffect(() => {
    if (viewerActive) {
      const position = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${position}px`
      window.scroll(0, position)
    } else {
      const position = window.scrollY
      document.body.style.position = ''
      document.body.style.top = ''
      window.scroll(0, position)
    }
  })

  return (
    <Wrapper>
      <Text>
        <h1>Gallery</h1>
      </Text>
      <Container>
      {pics.map((elem, index) => {
        const picture = elem.node.childImageSharp.gatsbyImageData
        return (
            <Box onClick={() => {viewerToggler(); setSendpicture(picture)}} key={index}>
              <GatsbyImage image={ picture } alt="" />
            </Box>
        )
      })}
    </Container>
    {viewerActive ? <div onClick={viewerToggler}><Viewer picture={ sendpicture } /></div> : null}
    </Wrapper>
  )
}

export default GalleryComp
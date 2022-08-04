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
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)
  const pics = GalleryPictures.allFile.nodes

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
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  })

  return (
    <Wrapper>
      <Text>
        <h1>Gallery</h1>
        <p>When in our care, dogs have free time together and are able to socialise, sleep and play in a safe and clean environment. <br/> All dog walks take place in one of the local parks and are a minimum of one hour. We have NO KENNELS, NO CAGES AND NO EXTERNAL ARRANGEMENTS.</p>
        <br></br>
        <br></br>
      </Text>
      <Container>
      {pics.map((elem, index) => {
        const picture = elem.childImageSharp.gatsbyImageData
        return (
            <Box onClick={() => {viewerToggler(); setSendpicture(picture)}} key={index}>
              <GatsbyImage image={ picture } alt="" className="img-wrap" imgClassName="img-box" />
            </Box>
        )
      })}
    </Container>
    {viewerActive ? <div onClick={viewerToggler}><Viewer picture={ sendpicture } /></div> : null}
    </Wrapper>
  )
}

export default GalleryComp
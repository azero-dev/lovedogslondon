import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Container } from './SliderElements'
import { graphql, useStaticQuery } from 'gatsby'

const Slider = () => {

  const getSliderPic = useStaticQuery(graphql`
    query GettingImgSlider {
      file(relativeDirectory: {eq: "gallery"}, name: {eq: "Annecto-2"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)
  const sliderPic = getSliderPic.file.childImageSharp.gatsbyImageData
  
  return (
    <Container>
      <GatsbyImage image={sliderPic} objectPosition="0 84%" className="imgwrpfx" imgClassName="imgfx" alt="Vekison running with the dogs" />
    </Container>
  )
}

export default Slider
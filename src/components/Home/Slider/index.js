import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Container, TextBox, Logo } from './SliderElements'
import Text from '../../Text/index'

const Slider = () => {

  //Query images
  const sliderLogo = useStaticQuery(graphql`
    query gettingSliderLogo {
      file(name: {eq: "logo"}) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
    }
  `)
  const pic = sliderLogo.file.childImageSharp.gatsbyImageData


  return (
    <Container>
      <TextBox>
        <Text dark={"true"}>
          <h1>...it must be love!</h1>
        </Text>
      </TextBox>
      <Logo>
        <GatsbyImage image={pic} alt="Logo" />
      </Logo>
    </Container>
  )
}

export default Slider
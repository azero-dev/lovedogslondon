import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { StaticImage , getImage } from 'gatsby-plugin-image'
import { Container, Text, Logo } from './SliderElements'

const Slider = () => {
  return (
    <Container>
      <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque in leo pharetra iaculis quis eu nulla. Integer sed leo pellentesque, auctor orci quis, dapibus est.
      </Text>
      <Logo>
        <StaticImage src="../../../images/logo.png" alt="Logo" />
      </Logo>
    </Container>
  )
}

export default Slider
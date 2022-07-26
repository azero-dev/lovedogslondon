import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, TextBox, Logo } from './SliderElements'
import Text from '../../Text/index'

const Slider = () => {
  return (
    <Container>
      <TextBox>
        <Text dark={"true"}>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque in leo pharetra iaculis quis eu nulla. Integer sed leo pellentesque, auctor orci quis, dapibus est.</h3>
        </Text>
      </TextBox>
      <Logo>
        <StaticImage src="../../../images/logo.png" alt="Logo" placeholder='tracedSVG' />
      </Logo>
    </Container>
  )
}

export default Slider
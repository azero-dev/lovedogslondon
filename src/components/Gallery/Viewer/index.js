import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Wrapper, Container, Box } from './ViewerElements'
import { useState } from 'react';

const Viewer = ({picture}) => {

  //Zoom
  const [scale, setScale] = useState(1)

  const scaling = (e) => {
    const newVal = e.deltaY
    if (newVal > scale && scale > 1) {
      setScale(elem => elem -0.5)
    } else if (newVal < scale && scale < 5) {
      setScale(elem => elem +0.5)
    }
  }

  return (
    <Wrapper onWheelCapture={scaling}>
      <Container>
        <Box>
          <GatsbyImage image={picture} objectFit="contain" imgClassName="imgViewer" scale={scale} alt="" />
        </Box>
      </Container>
    </Wrapper>
  )
}

export default Viewer
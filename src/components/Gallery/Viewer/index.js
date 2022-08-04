import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Wrapper, Container, Box } from './ViewerElements'
import { useState } from 'react';
import { useEffect } from 'react';

const Viewer = ({picture}) => {

  //Zoom picture
  const [scale, setScale] = useState(1)
  const scaling = (e) => {
    const newVal = e.deltaY
    if (newVal > scale && scale > 1) {
      setScale(elem => elem -0.5)
    } else if (newVal < scale && scale < 5) {
      setScale(elem => elem +0.5)
    }
  }

  //Transport pictures position
  const windowWidth = window.screen.availWidth
  const windowHeight = window.screen.availHeight
  const [xPosition, setXPosition] = useState(0)
  const [yPosition, setYPosition] = useState(0)
  const [xImgPosit, setXImgPosit] = useState(0)
  const [yImgPosit, setYImgPosit] = useState(0)

  const mousePosition = e => {
    setXPosition(e.clientX)
    setYPosition(e.clientY)
  }

  useEffect(() => {
    const xImg = ((xPosition * picture.width) / windowWidth) - (picture.width / 2);
    const yImg = ((yPosition * picture.height) / windowHeight) - (picture.height / 2);
    setXImgPosit(xImg)
    setYImgPosit(yImg)
  }, [xPosition, yPosition])

  return (
    <Wrapper onWheelCapture={scaling} onMouseMove={mousePosition}>
      <Container>
        <Box>
          <GatsbyImage image={picture} objectFit="contain" scale={scale} xPos={xImgPosit} yPos={yImgPosit} alt="" />
        </Box>
      </Container>
    </Wrapper>
  )
}

export default Viewer

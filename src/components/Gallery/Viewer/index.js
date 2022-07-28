import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Wrapper, Container, Box } from './ViewerElements'

const Viewer = ({picture}) => {

  return (
    <Wrapper>
      <Container>
        <Box>
          <GatsbyImage image={picture} alt="" />
        </Box>
      </Container>
    </Wrapper>
  )
}

export default Viewer
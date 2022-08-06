import React from 'react'
import { Link } from 'gatsby'

import { ButtonWrap, Box } from './ButtonElements'

const Button = ( props ) => {
  return (
    <>
      <ButtonWrap align={props.align}>
        {props.link ?
        <Link to={props.to}>
          <Box secondary={props.secondary}>
            {props.name}
          </Box>
        </Link>
        :
        <a href={props.to}>
          <Box secondary={props.secondary}>
            {props.name}
          </Box>
        </a>
        }
      </ButtonWrap>
    </>
  )
}

export default Button

// to = address to follow
// name = text inside button
// link = normal button or Link -> default: normal button
// align = align button -> default: 'center'
// secondary = secondary css -> default: primary
import React from 'react'
import { Link } from 'gatsby'
import { ButtonWrap, Box } from './ButtonElements'

const Button = ( props ) => {
  return (
    <>
      <ButtonWrap align={props.align} display={props.display} >
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
// link = normal button or Link -> default: normal anchor link
// align = align button -> default: 'center'
// display = outer wrapper display -> default: block
// secondary = secondary css -> default: primary
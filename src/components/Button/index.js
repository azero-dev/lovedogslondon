import React from 'react'

import { Box } from './ButtonElements'

const Button = ( props ) => {
  return (
    <>
      <Box onClick={props.click} primary={props.primary}>{props.name}</Box>
    </>
  )
}

export default Button
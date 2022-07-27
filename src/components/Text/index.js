import * as React from 'react'
import { NormalText } from './TextElements'

const Text = ({ children, dark, align }) => {
  return (
      <NormalText dark={dark} align={align}>{ children }</NormalText>
  )
}

export default Text
import * as React from 'react'
import { NormalText } from './TextElements'

const Text = ({ children, dark }) => {
  return (
      <NormalText dark={dark}>{ children }</NormalText>
  )
}

export default Text
import * as React from 'react'
import { NormalText } from './TextElements'

const Text = ({ children }) => {
  return (
      <NormalText>{ children }</NormalText>
  )
}

export default Text
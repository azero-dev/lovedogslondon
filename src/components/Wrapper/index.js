import * as React from 'react'
import { Container } from './WrapperElements'

const Wrapper = ({ children }) => {
  return (
    <Container>{ children }</Container>
  )
}

export default Wrapper
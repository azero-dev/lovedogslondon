import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 200;
  cursor: pointer;
  background-attachment: fixed;
  overflow-y: hidden !important;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: space-around;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
  }
`

export const Box = styled.div`
  align-self: center;
  max-width: 50%;
`
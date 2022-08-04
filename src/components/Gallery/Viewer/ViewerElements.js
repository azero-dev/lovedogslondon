import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 200;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
  }
`

export const Box = styled.div`
  align-self: center;
  max-width: ${props => (props.children.props.image.width > props.children.props.image.height) ? "50%" : "none"};
  @media screen and (max-width: 1024px) {
    /* max-width: 95%; */
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
    /* max-width: 50%; */
  }
  & .imgViewer {
    max-width: ${props => (props.children.props.image.height > props.children.props.image.width) ? "25%" : "none"};
    margin: 0 auto;
    transform: ${props => {
      const zoomed = props.children.props.scale
      return `scale(${zoomed}, ${zoomed})`
    }};
  }
`
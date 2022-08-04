import styled from 'styled-components'

export const Container = styled.div`
  /* position: relative;
  display: block; */
  width: 100%;
  height: 50vh;
  padding: 2vh 1vw;
  background-color: #311210;
  @media screen and (max-width: 1024px) {
    /* height: 78vh; */
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
    /* height: 78vw; */
  }
  & .imgwrpfx {
    width: 100%;
    height: 46vh;
  }
  & .imgfx {
    /* object-position: 0 84% !important; */
  }
`
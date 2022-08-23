import styled from 'styled-components'

export const FooterArea = styled.footer`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: #311210;
  width: 100%;
  padding: 4vh;
`

export const Logo = styled.div`
  width: 10vw;
  height: 10vw;
  @media screen and (max-width: 992px) {
    width: 14em;
    height: auto;
  }
`

export const WebInfo = styled.div`
  background: #311210;
  width: 100%;
  & a, a:visited {
    margin: 0 0 0 1em;
    font-size: .8em;
    color: #848484;
  }
`
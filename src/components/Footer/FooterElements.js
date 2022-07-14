import styled from 'styled-components'
import { Link } from 'gatsby'

export const FooterArea = styled.footer`
  position: relative;
  background: #402825;
  width: 100%;
  /* height: 10vh; */
  padding: 2vh 0;
  color: #fff;
  z-index: 10;

  @media screen and (max-width: 992px) {
    /* height: 10vh; */
  }
`

export const FooterDiv = styled.div`
  padding: 0 4vw;

  @media screen and (max-width: 992px) {
    font-size: .8em;
    padding: 0 2vw;
    line-height: 1.2em;
  }
`
export const FooterLink = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
`

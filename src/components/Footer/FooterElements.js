import styled from 'styled-components'
import { Link } from 'gatsby'

export const FooterArea = styled.footer`
  position: relative;
  background: #311210;
  width: 100%;
  padding: 2vh 0;
  color: #fff;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
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

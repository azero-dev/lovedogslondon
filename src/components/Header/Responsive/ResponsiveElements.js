import styled from 'styled-components'
import { Link } from 'gatsby'

export const DropdownMenu = styled.div`
  position: relative;
  display: inline-block;
`

export const Burger = styled.div`
  cursor: pointer;
`

export const Content = styled.div`
  display: ${props => props.close ? "none" : "flex"};
  flex-direction: column;
  position: fixed;
  top: ${props => props.shrink ? '70px' : '100px'};;
  right: 0;
  width: 100%;
  height: ${props => props.shrink ? 'calc(100vh - 70px)' : 'calc(100vh - 100px)'};
  justify-content: center;
  align-items: center;
  gap: 1em;
  font-size: 2em;
  z-index: 101;
  background-color: #311210;
  color: #fff;
`

export const HeadLink = styled(Link)`
color: #fff;
text-decoration: none;
/* margin-right: 20px; */
transition: .2s;
&.${props => props.activeClassName} {
    border-bottom: 2px solid #d82329;
  }
`
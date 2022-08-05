import styled from 'styled-components'
import { Link } from 'gatsby'

export const HeadLink = styled(Link)`
color: #402825;
text-decoration: none;
margin-right: 20px;
transition: .2s;
&:hover {
  color: #79858B;
}
&.${props => props.activeClassName} {
    color: #311210;
    border-bottom: 2px solid #d82329;
  }
`
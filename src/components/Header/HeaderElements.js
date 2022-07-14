import styled from 'styled-components'
import { Link } from 'gatsby'

export const HeadArea = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
position: sticky;
top: 0;
background-color: #fff;
color: #402825;
font-weight: bold;
z-index: 100;
`

export const Logo = styled.div`
position: relative;
left: 6vw;
order: 1;
`
export const HeadLink = styled(Link)`
color: #402825;
text-decoration: none;
margin-right: 20px;
transition: .2s;
&:hover {
  color: #79858B;
}
&.${props => props.activeClassName} {
    color: #79858B;
  }
`
export const Menu = styled.div`
position: relative;
right: 2vw;
margin: 0;
padding: 0;
order: 2;
`
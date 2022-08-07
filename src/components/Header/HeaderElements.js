import styled from 'styled-components'

export const HeadArea = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
position: sticky;
top: 0;
background-color: #fff;
color: #311210;
font-weight: bold;
box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
z-index: 100;
`

export const Logo = styled.div`
position: relative;
left: 6vw;
order: 1;
`

export const Menu = styled.div`
position: relative;
right: 2vw;
margin: 0;
padding: 0;
order: 2;
`
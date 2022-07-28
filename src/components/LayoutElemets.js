import styled from 'styled-components'

export const Main = styled.div`
background-color: #311210;
`

export const Body = styled.div`
min-height: 100vh;
display: grid;
grid-template-rows: ${props => props.inScroll === false ? "100px auto 100px" : "70px auto 100px"};
transition: .5s;
`
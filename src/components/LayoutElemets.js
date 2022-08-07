import styled from 'styled-components'

export const Main = styled.div`
background-color: #311210;
`

export const Body = styled.div`
min-height: 100vh;
display: grid;
grid-template-rows: ${props => props.inScroll === false ? "100px 0 auto auto" : "70px 30px auto auto"};
transition: .5s;
`
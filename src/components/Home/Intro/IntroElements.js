import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10vh 16em;
  background-color: #fff;
  @media screen and (max-width: 1024px) {
    padding: 10vh 4em;
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
    min-height: 78vw;
    padding: 10vh 4em;
  }
`

export const Btn = styled.div`
  order: 3;
  margin: 3vh 0 0;
  height: 2em;
`
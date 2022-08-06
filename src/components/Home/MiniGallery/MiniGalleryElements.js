import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-content: space-around;
  gap: 4em;
  width: 100%;
  padding: 4em;
  background-color: #311210;
  @media screen and (max-width: 1024px) {
    gap: 2vh 2vw;
    padding: 3vh 4vw;
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
  }
`

export const Box = styled.div`
  width: 20vw;
  height: 20vw;
  background-color: #311210;
  transition: .3s;
  &:hover {
    transform: scale(1.02);
  }
  @media screen and (max-width: 1024px) {
    width: 40vw;
    height: 40vw;
  }
`
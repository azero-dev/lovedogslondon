import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #fff;
  padding: 2.5% 0;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
  }
`

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-content: space-around;
  gap: 4em 1em;
  width: 95%;
  padding: 4em;
  margin-left: 2.5%;
  background-color: #311210;
  @media screen and (max-width: 1024px) {
    gap: 2vh 2vw;
    padding: 3vh 4vw;
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
  }
`

export const Box = styled.div`
align-self: center;
  width: 18vw;
  transition: .3s;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    width: 40vw;
    height: 40vw;
  }
  &:hover {
    transform: scale(1.02);
  }
`
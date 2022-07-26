import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-content: space-around;
  gap: 4em;
  width: 100%;
  padding: 6em 4em 4em;
  background-color: #fff;
  @media screen and (max-width: 1024px) {
    flex-flow: column wrap;
    /* min-height: 78vh; */
    gap: 2vh 2vw;
    padding: 6em 0 2em;
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
    /* min-height: 78vw; */
  }
`

export const SafeBox = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  @media screen and (max-width: 1024px) {
    flex-flow: column wrap;
    align-items: center;
  }
`

export const Box = styled.div`
  width: 12vw;
  min-height: 15vw;
  transition: .3s;
  &:hover {
    transform: scale(1.02);
  }
  @media screen and (max-width: 1024px) {
    width: 40vw;
    margin-bottom: 2em;
  }
`
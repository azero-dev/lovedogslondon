import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  /* align-items: center; */
  align-content: space-around;
  gap: 4em;
  /* grid-template-columns: [line1] 1fr [line2] 1fr [line3] 1fr [line4] 1fr [line5];
  grid-template-rows: [l1] 45% [l2] 45% [l3]; */
  /* position: relative; */
  width: 100%;
  /* height: 50vh; */
  padding: 8em 4em;
  background-color: #fff;
  @media screen and (max-width: 1024px) {
    /* min-height: 78vh; */
    gap: 2vh 2vw;
    padding: 3vh 4vw;
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
`

export const Box = styled.div`
  width: 15vw;
  height: 15vw;
  transition: .3s;
  @media screen and (max-width: 1024px) {
    /* width: 40vw;
    height: 40vw; */
  }
  &:hover {
    transform: scale(1.02);
  }
`
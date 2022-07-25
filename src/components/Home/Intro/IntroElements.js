import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  gap: 8%;
  position: relative;
  width: 100%;
  /* height: 50vh; */
  margin: 0;
  padding: 10vh 4vw;
  background-color: #fff;
  @media screen and (max-width: 1024px) {
    min-height: 78vh;
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
    min-height: 78vw;
  }
`

export const Btn = styled.div`
  order: 3;
  margin: 3vh 0 0;
  height: 2em;
`
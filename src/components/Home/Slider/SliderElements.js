import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 8%;
  position: relative;
  width: 100%;
  height: 50vh;
  margin: 0;
  padding: 4vh 4vw;
  background-color: #311210;
  @media screen and (max-width: 1024px) {
    flex-flow: column nowrap;
    height: 78vh;
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
    flex-flow: column nowrap;
    height: 78vw;
  }
`

export const TextBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 35vw;
  @media screen and (max-width: 1024px) {
    width: 88vw;
    font-size: 1.1em;
  }
`

export const Logo = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 15vw;
  @media screen and (max-width: 1024px) {
    width: 50vw;
  }
`
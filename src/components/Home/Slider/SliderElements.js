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

export const Text = styled.div`
  order: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 35vw;
  height: 35vh;
  color: #fff;
  font-weight: normal;
  text-align: center;
  font-size: 1.3em;
  @media screen and (max-width: 1024px) {
    width: 88vw;
    font-size: 1.1em;
  }
`

export const Logo = styled.div`
  order: 2;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 14vw;
  @media screen and (max-width: 1024px) {
    width: 50vw;
  }
`
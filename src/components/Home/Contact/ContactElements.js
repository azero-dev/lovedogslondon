import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10vh 4vw;
  background-color: #311210;
  @media screen and (max-width: 1024px) {
    /* min-height: 78vh; */
    flex-flow: column wrap;
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
  }
`

export const TextWrap = styled.div`
  width: 100%;
  margin-bottom: 1em;
`

export const ContactDetails = styled.div`
  width: 30%;
  margin-left: 2em;
  @media screen and (max-width: 1024px) {
    width: 90%;
    margin: 2em 1em 0;
  }
`
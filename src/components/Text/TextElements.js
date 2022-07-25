import styled from 'styled-components'

export const NormalText = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  gap: 8%;
  /* width: 70vw; */
  color: #311210;
  text-align: center;
  font-size: 1.1em;
  @media screen and (max-width: 1024px) {
    /* width: 70vw; */
  }
  & h1 {
    margin-bottom: 3vh;
  }
  & p {
    margin-bottom: 1em;
  }
`
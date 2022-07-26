import styled from 'styled-components'

export const NormalText = styled.div`
  color: #311210;
  color: ${props => props.dark ? "#fff" : "#311210"};
  text-align: center;
  font-size: 1.1em;
  font-weight: normal;
  @media screen and (max-width: 1024px) {
    /* width: 70vw; */
  }
  & h1 {
    margin-bottom: 1em;
  }
  & h2 {
    margin-bottom: 1em;
  }
  & h3 {
    margin-bottom: 1em;
    font-weight: normal;
  }
  & h4 {
    margin-bottom: 1em;
  }
  & h5 {
    margin-bottom: 1em;
  }
  & h6 {
    margin-bottom: 1em;
  }
  & p {
    margin-bottom: 1em;
  }
`
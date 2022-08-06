import styled from 'styled-components'

export const ServWrap = styled.div`
  display: flex;
  flex-direction: ${props => {
    return props.distribution ? 'row' : 'row-reverse'
  }};
  justify-content: center;
  align-items: flex-start;
  align-content: center;
  gap: 8vw;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  align-items: center;
    gap: 2em;
  }
`

export const ServImg = styled.div`
  flex: 2;
  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`

export const ServText = styled.div`
  flex: 8;
  & h1 {
    border-bottom: 2px solid #d82329;
  }
`
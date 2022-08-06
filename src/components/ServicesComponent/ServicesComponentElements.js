import styled from 'styled-components'

export const ServWrap = styled.div`
  display: flex;
  flex-direction: ${props => {
    return props.distribution ? 'row' : 'row-reverse'
  }};
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 8vw;
`

export const ServImg = styled.div`
  flex: 2;
`

export const ServText = styled.div`
  flex: 8;
`
import styled from 'styled-components'

export const Box = styled.div`
  padding: 0 0 2px 0;
  cursor: pointer;
  font-size: 1.2em;
  /* font-weight: bold; */
  color: ${props => props.primary === 'true' ? '#311210' : '#fff'};
  background-color: rgba(255, 255, 255, 0);
  border-bottom: 3px solid #d82329;
  border-radius: 3px;
  transition: .3s;
  &:hover {
    padding: 0;
  }
`
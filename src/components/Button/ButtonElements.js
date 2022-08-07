import styled from 'styled-components'

export const ButtonWrap = styled.div`
  width: 100%;
  display: ${props => props.display ? props.display : 'block'} ;
  text-align: ${props => {
    const align = props.align
    if (align === 'left') {
      return 'left'
    } else if (align === 'right') {
      return 'right'
    } else {
      return 'center'
    }
  }};
`

export const Box = styled.button`
  padding: 0 0 2px 0;
  cursor: pointer;
  font-size: 1.2em;
  color: ${props => props.secondary === 'true' ? '#fff' : '#311210'};
  background-color: transparent;
  border: none;
  border-bottom: 3px solid #d82329;
  border-radius: 3px;
  transition: .3s;
  &:hover {
    padding: 0;
  }
`
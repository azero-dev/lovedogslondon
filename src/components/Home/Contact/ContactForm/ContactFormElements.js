import styled from 'styled-components'

export const Container = styled.div`
  width: 30%;
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
  }
  & form {
    width: 100%;
  }
  & input {
    width: 100%;
    margin: .2em;
    padding: 1em;
    border: none;
    border-radius: 4px;
    font-size: 1em;
  }
  & input:focus {
    outline: 1px solid #d82329;
  }
  & textarea {
    width: 100%;
    margin: .2em;
    padding: 1em;
    border: none;
    border-radius: 4px;
    max-width: 100%;
    min-width: 100%;
    max-height: 200px;
    font-size: 1em;
  }
  & textarea:focus {
    outline: 1px solid #d82329;
  }
  & button {
    width: 100%;
    margin: .2em;
    padding: 1em;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: bold;
    background-color: #fff;
    transition: .3s;
  }
  & button:hover {
    background-color: #e5e5e5;
  }
`
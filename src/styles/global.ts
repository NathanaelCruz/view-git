import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-family: ${(props) => props.theme.font.primary};
    color: ${(props) => props.theme.colors.text}
  }

  html,
  body,
  #__next{
    height: 100%;
    width: 100%;
  }

  h1{
    color: ${(props) => props.theme.colors.heading}
  }

  p{
    font-size: ${(props) => props.theme.measures.medium}
  }

  button,
  textarea,
  input{
    font-size: ${(props) => props.theme.font.primary};
  }
`

export default GlobalStyles

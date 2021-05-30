import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createGlobalStyle } from 'styled-components'
import color from './utils/color'

const GlobalStyle = createGlobalStyle`
  body {
    padding:0;
    margin: 0;
    min-height:100vh;
    background: ${color.appBodyBG};
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  // No Arrows for <input type="number" />
  input.no-arrows::-webkit-outer-spin-button,
  input.no-arrows::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input.no-arrows[type="number"] {
    -moz-appearance: textfield;
  }

`
import { createGlobalStyle } from 'styled-components';
import '@/assets/fonts/pretendard.css';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    border: 0;
    outline: unset;
    list-style: none;
    font-style: normal;
  }
  button,
  label {
    cursor: pointer;
    background-color: transparent;
  }
  blockquote,
  q {
    quotes: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  li{
    list-style:none;
  }
`;

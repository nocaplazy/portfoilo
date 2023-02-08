import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyle';
import { theme } from './theme';

export const StyleProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

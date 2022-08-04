import Router from "./router/routes";

// global styles
import { GlobalStyle } from "./global/globalStyles";

// material ui
import { ThemeProvider } from "styled-components";

// contants
import theme from './constants/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Router/>
    </ThemeProvider>
  );
}

export default App;

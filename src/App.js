import Router from "./router/routes";

// global context
import { GlobalProvider } from "./provider/GlobalProvider";

// global styles
import { GlobalStyle } from "./global/globalStyles";

// material ui
import { ThemeProvider } from "styled-components";

// contants
import theme from './constants/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <GlobalStyle/>
        <Router/>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;

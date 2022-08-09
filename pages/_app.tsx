import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";

import "../styles/global.css";
import "../styles/styles.css";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme='system'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;

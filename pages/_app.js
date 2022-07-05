import "../styles/globals.css";
import "../styles/styles.css";
import { ThemeProvider } from "next-themes";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme='light' attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;

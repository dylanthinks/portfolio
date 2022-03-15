import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Nav from "../components/navigation";
import Footer from "../components/footer";

function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;

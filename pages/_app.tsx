import { AppProps } from "next/app";
import "../assets/styles/index.css";
import "../assets/styles/main.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;

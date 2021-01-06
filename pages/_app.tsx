import { AppProps } from "next/app";
import "../assets/styles/index.css";
import "../assets/styles/main.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;

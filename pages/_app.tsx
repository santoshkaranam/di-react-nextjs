import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Provider} from "react-jpex";
import getDiContainer from "../services/di";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Provider value={getDiContainer()}>
        <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp

import "../../public/css/template.css";

import { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "../core/store";

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
  </Provider>
}

export default MyApp

import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

import theme from "../theme";
import { AppProps } from "next/app";
import { SiteHeader } from "@components/SiteHeader";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider resetCSS theme={theme}>
        <SiteHeader />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;

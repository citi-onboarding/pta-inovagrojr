import isPropValid from "@emotion/is-prop-valid";
import { AppProps } from "next/app";
import Head from "next/head";
import { StyleSheetManager, ThemeProvider } from "styled-components";

import GlobalStyles from "../styles/global";
import theme from "../styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Next.js Boilerplate</title>
          <link
            rel="shortcut icon"
            href="/img/icon-192.png"
            type="image/x-icon"
          />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />

          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#06092B" />
          <meta name="description" content="A simple boilerplate for next.js" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default App;

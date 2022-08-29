import { NextPage } from "next";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import React from "react";
import { ThemeProvider } from "styled-components";
import DefaultLayout from "../layouts";
import GlobalStyles from "../styles/GlobalStyles";
import "../styles/index.scss";
import { theme } from "../styles/theme";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        {getLayout(
          <>
            <NextNProgress
              color="#29D"
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
              options={{ showSpinner: false }}
            />
            <Component {...pageProps} />
          </>
        )}
      </ThemeProvider>
    </React.Fragment>
  );
};

export default MyApp;

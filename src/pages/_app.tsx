import type { AppProps } from 'next/app';
import Head from 'next/head';
import { kakaoInit } from '@helper/index';
import Layout from '@components/layouts/Layout';
import '../styles/globals.css';
import theme from '@styles/theme';
import { RecoilRoot } from 'recoil';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

declare global {
  interface Window {
    Kakao: any;
    kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    kakaoInit();
  }, []);

  return (
    <>
      <Head>
        <title>회식일지도</title>
        <meta name="description" content="get-together" />
        <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { kakaoInit } from '@helper/index';
import Layout from '@components/layouts/Layout';
import '../styles/globals.css';
import theme from '@styles/theme';
import { RecoilRoot } from 'recoil';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import Script from 'next/script';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

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
      {GA_ID && (
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
      )}
      {GA_ID && (
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `,
          }}
        />
      )}
      <Head>
        <title>회식이지</title>
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

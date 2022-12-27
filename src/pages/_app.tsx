import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { kakaoInit } from '@helper/index';
import Layout from '@components/layouts/Layout';
import { useEffect } from 'react';

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

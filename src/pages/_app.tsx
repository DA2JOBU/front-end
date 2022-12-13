import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '@components/layouts/Layout';
// import { useEffect } from 'react';

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {

  const kakaoInit = () => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
    console.log('성공', window.Kakao.isInitialized());
  };

  return (
    <>
      <Head>
        <title>회식일지도</title>
        <meta name="description" content="get-together" />
        <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Layout>
        <Script src="https://t1.kakaocdn.net/kakao_js_sdk/2.0.1/kakao.min.js" onLoad={kakaoInit} integrity="sha384-eKjgHJ9+vwU/FCSUG3nV1RKFolUXLsc6nLQ2R1tD0t4YFPCvRmkcF8saIfOZNWf/" crossOrigin="anonymous"></Script>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

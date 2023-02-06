/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  
  render() {
    return (
      <Html lang="ko">
        <Head>
          <script
            type="text/javascript"
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&libraries=services&autoload=false`}
          >
          </script>
          <script
            type="text/javascript"
            src="https://developers.kakao.com/sdk/js/kakao.min.js"
          >
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

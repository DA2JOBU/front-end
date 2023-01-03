import Document, { Html, Head, Main, NextScript } from 'next/document';
import Navbar from 'src/common/templete/navbar';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <Navbar/>
          <script
            type="text/javascript"
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&libraries=services&autoload=false`}
            async
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

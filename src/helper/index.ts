export const kakaoInit = () => {
  const kakao = window.Kakao;
  if(!kakao.isInitialized()) {
      kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
  }
  return kakao;
}


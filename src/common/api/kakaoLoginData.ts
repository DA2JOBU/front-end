export const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
export const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
export const CLIENT_SECRET = process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET;
export const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
export const LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`

interface TokenResponse {
  token_type: string;
  access_token: string;
  refresh_token: string;
  id_token: string;
  expires_in: number;
  refresh_token_expires_in: string;
  scope: string;
}

interface UserInfo {
  id: number;
  connected_at: string;
  properties: {
    nickname: string;
    profile_image?: string; // 640x640
    thumbnail_image?: string; // 110x110
  };
}

// async function getTokenFromKakao() {
//   const router = useRouter();
//   const code = router.query['code'];
//   const tokenUrl = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${authCode}`;
//   const response: TokenResponse = await fetch(tokenUrl, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//   }).then((res) => res.json());
//   return response;
// }

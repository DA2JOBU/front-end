import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { REST_API_KEY, REDIRECT_URI, CLIENT_SECRET } from 'src/common/api/kakaoLoginData';
import { login } from '@api/auth';
import { NextPage } from 'next';
import api from '@api/api-config';

const KakaoWithLogin: NextPage = () => {
  const router = useRouter();
  const { code } = router.query;
  useEffect(() => {
    if (code) {
      getToken(code);
    }
  }, [code]);

  const getToken = async (code: string[] | string | undefined) => {
    try {
      await fetch(`https://kauth.kakao.com/oauth/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}&client_secret=${CLIENT_SECRET}`,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.access_token) {
            api.setAccessToken(data.access_token);
          } else {
            router.push('/');
          }
        });
      const loginResponse = await login(sessionStorage.getItem('token') || '');
      api.setJwtToken(loginResponse.accessToken);
      router.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return <></>;
};

export default KakaoWithLogin;

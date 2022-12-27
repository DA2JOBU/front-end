import React from 'react';
import styled from 'styled-components';
import {  LOGIN_URL } from 'src/common/api/kakaoLoginData';
import { NextPage } from 'next';
import Link from 'next/link';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const KakaoWithLogin: NextPage = () => {

  return (
    <Wrapper>
      <Link href={`${LOGIN_URL}`}>
        <a>
          <img src="/assets/images/kakao_login.png" width="222" alt="카카오 로그인 버튼" />
        </a>
      </Link>
    </Wrapper>
  );
};

export default KakaoWithLogin;

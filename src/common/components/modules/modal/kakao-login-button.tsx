import React from 'react';
import styled from 'styled-components';
import { LOGIN_URL } from 'src/common/api/kakaoLoginData';
import { NextPage } from 'next';
import Link from 'next/link';
import Icons from 'public/assets/images/icons';

const Wrapper = styled.div`
  width: 100%;
  height: 3.75rem;
  margin: 0;
`;

const KakaoLoginButton: NextPage = () => {
  return (
    <Wrapper>
      <Link href={`${LOGIN_URL}`}>
        <a>
          <Icons.KakaoButton />
        </a>
      </Link>
    </Wrapper>
  );
};

export default KakaoLoginButton;

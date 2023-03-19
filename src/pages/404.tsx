import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Navs from '@components/modules/nav/navs';
import Nav from '@components/modules/nav/nav';

const MainContainer = styled.div`
  z-index: 25;
  width: 100%;
  height: 64px;
  position: relative;
`;

const Logo = styled.div`
  position: absolute;
  top: 8px;
  left: 32px;
`;

const Contents = styled.div`
  background-color: #f6f6f6;
  display: block;
  height: 100%;
  width: 100%;
  margin: 0;
  position: relative;
  overflow: auto;
  padding-bottom: 3rem;
`;

const NotFoundMessageDiv = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const NotFoundMessageTitle = styled.h1`
  width: 100%;
  text-align: center;
`;

const NotFoundMessageBody = styled.div`
  width: 100%;
  text-align: center;
`;

const StyledButton = styled.div`
  /*공통 스타일*/
  align-items: center;
  outline: none;
  text-align: center;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  padding: 1rem;

  /*크기*/
  font-size: 1rem;

  /*색상 */
  background: ${({ theme }) => theme.color.orange};
  color: ${({ theme }) => theme.color.white};

  &:hover {
    background: #ff844b;
  }

  margin-top: 2rem;

  /*기타 */
  & + & {
    margin-left: 1rem;
  }
`;

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <>
      <MainContainer>
        <Logo onClick={() => router.push('/')}>
          <img src="assets/images/logo.svg" alt="로고" className="logo" />
        </Logo>
        <Navs>
          <Nav title=""></Nav>
          <Nav title=""></Nav>
        </Navs>
      </MainContainer>
      <Contents>
        <NotFoundMessageDiv>
          <NotFoundMessageTitle>페이지를 찾을 수 없습니다.</NotFoundMessageTitle>
          <NotFoundMessageBody>
            <p>존재하지 않는 주소를 입력하셨거나</p>
            <p>요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</p>
          </NotFoundMessageBody>
          <StyledButton onClick={() => router.push('/')}>메인으로 가기</StyledButton>
        </NotFoundMessageDiv>
      </Contents>
    </>
  );
}

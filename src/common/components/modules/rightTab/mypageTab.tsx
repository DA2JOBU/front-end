import NextLink from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import api from '@api/api-config';

// @TODO 높이 맞추는 방법 고민해야됨
const MyPageTabContainer = styled.section`
  overflow: hidden;
  position: absolute;
  z-index: 25;
  clear: both;
  height: calc(100vh);
  right: 0px;
  width: 380px;
`;

const Contents = styled.article`
  background-color: ${({ theme }) => theme.color.white};
  display: block;
  height: calc(100vh);
  width: 100%;
  margin: 0;
  position: relative;
  overflow: auto;
  padding-bottom: 3rem;
`;

const MyPageContent = styled.button`
  width: 100%;
  height: 40px;
  text-align: left;
  vertical-align: middle;
  padding: 30px 20px 20px 20px;
`;

const MypageTab = (): JSX.Element => {
  const router = useRouter();

  return (
    <MyPageTabContainer>
      <Contents>
        <MyPageContent>내 정보</MyPageContent>
        <NextLink href='https://www.naver.com'>
          <MyPageContent>의견 및 오류정보</MyPageContent>
        </NextLink>
        <NextLink href='https://www.naver.com'>
          <MyPageContent>자주 묻는 질문</MyPageContent>
        </NextLink>
        <MyPageContent onClick={() => {
          api.deleteJwtToken();
          router.reload();
        }}>로그아웃</MyPageContent>
      </Contents>
    </MyPageTabContainer>
    )
}

export default MypageTab;
import NextLink from 'next/link';
import styled from 'styled-components';
import BottomContent from "@components/elements/bottomContent";

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

const MyPageContent = styled.button`
  width: 100%;
  height: 40px;
  text-align: left;
  padding: 10px;
`;

const MypageTab = (): JSX.Element  => {
  return (
    <MyPageTabContainer>
      <BottomContent>
        <MyPageContent>내 정보</MyPageContent>
        <NextLink href='https://www.naver.com'>
          <MyPageContent>의견 및 오류정보</MyPageContent>
        </NextLink>
        <NextLink href='https://www.naver.com'>
          <MyPageContent>자주 묻는 질문</MyPageContent>
        </NextLink>
      </BottomContent>
    </MyPageTabContainer>
    )
}

export default MypageTab;
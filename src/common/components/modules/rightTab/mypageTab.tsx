import NextLink from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import api from '@api/api-config';
import { useUserInfoModalOpen } from '../../../hook/modal.hook';

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
  margin: 2px;
`;

const MypageTab = (): JSX.Element => {
  const router = useRouter();
  const { openUserInfoModal } = useUserInfoModalOpen();

  return (
    <MyPageTabContainer>
      <Contents>
        <MyPageContent onClick={() => openUserInfoModal()}>내 정보</MyPageContent>
        <NextLink href='https://docs.google.com/forms/d/10kUG8UGW62uxh-LA0Op3TghRpTkC47bt3qBGX2fAyTo/edit?usp=forms_home&ths=true&pli=1'>
          <MyPageContent>의견 및 오류정보</MyPageContent>
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
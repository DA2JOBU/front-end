/* eslint-disable react/no-children-prop */
import React, { useEffect, useState, useRef } from 'react';
import SlideContainer from '@components/modules/slide-container';
import SideTabs from '@components/modules/tab/side-tabs';
import Navs from '@components/modules/nav/navs';
import Nav from '@components/modules/nav/nav';
import { SearchList } from '@components/modules/tab/tab-contents';
import RightTab from '@components/modules/rightTab';
import MypageTab from '@components/modules/rightTab/mypageTab';
import Modal from '@components/modules/modal';
import UserModal from '@components/modules/modal/user';
import Map from '@components/modules/map';
import { useUserInfoModalOpen } from '../hook/modal.hook';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import MyPlace from './myPlace';
import { useRecoilValue } from 'recoil';
import { searchList } from 'src/state';

export interface propsType {
  searchKeyword: string;
}

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Logo = styled.div`
  position: absolute;
  top: 8px;
  left: 32px;
`;

const Contents = (): JSX.Element => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  useEffect(() => {
    setAccessToken(sessionStorage.getItem('jwtToken'));
  }, [accessToken]);

  const { userInfoModalOpen } = useUserInfoModalOpen();
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  // 입력 폼 변화 감지하여 입력 값 관리
  const [value, setValue] = useState('');
  // 제출한 검색어 관리
  const [keyword, setKeyword] = useState('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const searchResult = useRecoilValue(searchList);

  useEffect(() => {
    setKeyword('');
  }, []);

  // 입력 폼 변화 감지하여 입력 값을 state에 담아주는 함수
  const handleOnChange = (e: { preventDefault: () => void; target: { value: string } }) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  // 제출한 검색어 state에 담아주는 함수
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setKeyword(value);
  };

  const handleDelete = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setValue('');
  };

  const sideValue = {
    handleOnChange,
    handleSubmit,
    value,
    handleDelete,
  };

  return (
    <MainContainer>
      <Logo onClick={() => router.reload()}>
        <img src="assets/images/logo.svg" alt="로고" className="logo" />
      </Logo>
      <Navs>
        <Nav title="" children={undefined}></Nav>
        <Nav title="검색" onClick={() => !setIsOpen}>
          <SlideContainer>
            <SideTabs sideValue={sideValue} />
          </SlideContainer>
          {keyword || searchResult.length > 0 ? <SearchList keyword={keyword} /> : <></>}
        </Nav>
        <Nav title="등록" onClick={() => !setIsOpen}>
          <SlideContainer>
            <RightTab
              handleOnChange={handleOnChange}
              handleSubmit={handleSubmit}
              handleDelete={handleDelete}
              value={value}
            />
          </SlideContainer>
        </Nav>

        <Nav
          title="나의 회식 장소"
          onClick={() => {
            if (sessionStorage.getItem('jwtToken') == null) {
              console.log('일로오나?');
            }
            alert('로그인을 해주세요');
          }}
        >
          <SlideContainer>
            {accessToken ? (
              <MyPlace
                handleOnChange={handleOnChange}
                handleSubmit={handleSubmit}
                handleDelete={handleDelete}
                value={value}
              />
            ) : (
              <></>
            )}
          </SlideContainer>
        </Nav>

        {accessToken ? (
          <Nav title="마이페이지" onClick={() => !setIsOpen}>
            <SlideContainer>
              <MypageTab />
            </SlideContainer>
          </Nav>
        ) : (
          <Nav title="로그인" onClick={showModal}>
            <SlideContainer></SlideContainer>
          </Nav>
        )}
      </Navs>
      <Map searchKeyword={keyword} />
      {modalOpen && <Modal onClose={closeModal} />}
      {userInfoModalOpen && <UserModal />}

      {/* <Sidebar searchKeyword={keyword} /> */}
    </MainContainer>
  );
};

export default Contents;

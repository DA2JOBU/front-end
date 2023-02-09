import React, { useEffect, useState } from 'react';
import { getUserInfo } from '@api/auth';
import { User } from '../../../../types/userType';
import { Overlay, ModalWrap, Container, ModalHeader, ModalBody } from './index';
import Icons from 'public/assets/images/icons';
import { useUserInfoModalOpen } from '../../../hook/modal.hook';

const UserModal = () => {
  const { closeUserInfoModal } = useUserInfoModalOpen();
  const accessToken = sessionStorage.getItem('jwtToken');
  const [userInfo, setUserInfo] = useState<User | null>(null);
  useEffect(() => {
    if (accessToken) {
      getUserInfo(accessToken).then((data) => {
        setUserInfo(data);
      });
    }
  }, [accessToken])
  
  return (
    <Overlay>
      <ModalWrap>
        <Container>
          <ModalHeader onClick={closeUserInfoModal}>
            <Icons.Close />
          </ModalHeader>
          <ModalBody>
            {/* 닉네임: {userInfo?.nickname}
            가입 일자: {userInfo?.createdAt} */}
          </ModalBody>
        </Container>
      </ModalWrap>
    </Overlay>
  );
};

export default UserModal;

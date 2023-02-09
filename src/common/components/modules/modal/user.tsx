import React from 'react';
import styled from 'styled-components';
import { Overlay, ModalWrap, Container, ModalHeader, ModalBody } from './index';
import Icons from 'public/assets/images/icons';
import { useUserInfoModalOpen } from '../../../hook/modal.hook';


const UserModal = () => {
  const { closeUserInfoModal } = useUserInfoModalOpen();
  return (
    <Overlay>
      <ModalWrap>
        <Container>
          <ModalHeader onClick={closeUserInfoModal}>
            <Icons.Close />
          </ModalHeader>
          <ModalBody>
            <p>유저 정보 틀</p>
          </ModalBody>
        </Container>
      </ModalWrap>
    </Overlay>
  );
};

export default UserModal;

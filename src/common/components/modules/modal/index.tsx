import React from 'react';
import styled from 'styled-components';
import KakaoLoginButton from './kakao-login-button';
import Icons from 'public/assets/images/icons';

type ModalProps = {
  onClose: () => void;
};

const Modal = ({ onClose }: ModalProps) => {
  return (
    <Overlay>
      <ModalWrap>
        <Container>
          <ModalHeader onClick={onClose}>
            <Icons.Close />
          </ModalHeader>
          <ModalBody>
            <Icons.LoginLogo />
            <Icons.Content />
            <p>로그인하고 장소를 저장해 보세요!</p>
          </ModalBody>
          <ModalFooter>
            <KakaoLoginButton />
          </ModalFooter>
        </Container>
      </ModalWrap>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 22.24rem;
  height: 32rem;
  padding: 20px;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const ModalHeader = styled.div`
  text-align: end;
  cursor: pointer;
`;
const ModalBody = styled.div`
  text-align: center;
  padding-bottom: 20px;
  p {
    padding-top: 10px;
    font-size: 14px;
  }
  svg {
    padding-top: 10px;
  }
`;

const ModalFooter = styled.div`
  text-align: center;
`;
const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: #ababab;
  border-radius: 10px;
  color: white;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #898989;
  }
`;
export default Modal;

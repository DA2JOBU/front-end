import React from 'react';
import { atom, useRecoilState } from 'recoil';

const userInfoModalOpenState = atom({
  key: 'userInfoModalOpenState',
  default: false,
});

export const useUserInfoModalOpen = () => {
  const [userInfoModalOpen, setUserInfoModalOpen] = useRecoilState(userInfoModalOpenState);

  const openUserInfoModal = () => {
    setUserInfoModalOpen(true);
  }

  const closeUserInfoModal = () => {
    setUserInfoModalOpen(false);
  }

  return {
    userInfoModalOpen,
    openUserInfoModal,
    closeUserInfoModal,
  }
}

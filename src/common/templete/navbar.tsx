import React, { useState, FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Contents from './contents';
import Tab from '@components/modules/tab';

const NavContianer = styled.nav`
  position: sticky;
  width: 100%;
  height: 64px;
`;
const UlStyled = styled.ul`
  justify-content: space-between;
  display: flex;
  padding: 0 28px;
`;

const LiStyled = styled.li`
  display: block;
  line-height: 64px;
  button {
    padding: 0 66px;
    cursor: pointer;
  }
  button.search {
    border-right: 1px solid ${({ theme }) => theme.color.gray70};
  }
`;

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    console.log(name);
    e.preventDefault();
    if (name == '검색') {
      console.log(name);
      setIsOpen(true);
    }
  };

  return (
    <NavContianer>
      <UlStyled>
        <LiStyled>로고</LiStyled>
        <LiStyled>
          <button className="search" name="검색" onClick={navOnClick}>
            검색
          </button>
          <button name="등록" onClick={navOnClick}>
            등록
          </button>
        </LiStyled>
        <LiStyled>로그인</LiStyled>
      </UlStyled>
      {isOpen ? <Contents value={name} setIsOpen={setIsOpen} /> : ''}
    </NavContianer>
  );
};
export default Navbar;

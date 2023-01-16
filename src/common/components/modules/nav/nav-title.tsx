import React, { useCallback } from 'react';
import styled from 'styled-components';

const LiStyled = styled.li`
  display: table-cell;
  line-height: 64px;
  width: 100px;
  &:first-child {
    padding-right: 4rem;
    width: 50px;
  }
  &:nth-child(2) {
    text-align: right;
    padding-left: 10rem;
  }

  &:nth-child(3) {
    padding-right: 8rem;
  }

  &:nth-child(4) {
    width: 60px;
    text-align: right;
  }
  &:last-child {
    width: 60px;
    text-align: right;
  }
`;

const ButtonStyle = styled.button`
  cursor: pointer;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSize.Gtitle};

  &.active {
    color: ${({ theme }) => theme.color.orange};
    font-weight: 600;
  }
  span {
    &.logo {
    }
    &.login,
    &.mypage {
    }

    &.search {
      padding-right: 33px;
      margin: 0;
      display: flex;
      align-items: center;
      ::after {
        content: '';
        flex: 1;
        height: 14px;
        width: 1px;
        background: ${({ theme }) => theme.color.gray70};
        margin: 0 0 0 33px;
      }
    }

    &.regis {
      // padding-left: 36px;
    }
  }
`;

export type NavTitleProps = {
  title: string;
  index: number;
  setSelectedNav: (index: number) => void;
  isActive: boolean;
};

const NavTitle = (props: NavTitleProps): JSX.Element => {
  const { title, setSelectedNav, index, isActive } = props;

  const handleOnClick = useCallback(() => {
    setSelectedNav(index);
  }, [setSelectedNav, index]);

  return (
    <LiStyled>
      <ButtonStyle onClick={handleOnClick} className={`${isActive ? 'active' : ''}`}>
        <span
          className={`${
            title === '검색'
              ? 'search'
              : title === '등록'
              ? 'regis'
              : title === '로그인'
              ? 'login'
              : title === '나의 회식 장소'
              ? 'mypage'
              : title === '로고'
              ? 'logo'
              : 'span'
          }`}
        >
          {title}
        </span>
      </ButtonStyle>
    </LiStyled>
  );
};

export default NavTitle;

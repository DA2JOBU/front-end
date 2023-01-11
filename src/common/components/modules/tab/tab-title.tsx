import React, { useCallback } from 'react';
import styled from 'styled-components';

const LiStyled = styled.li`
  width: 100%;
  height: 100%;
`;

const ButtonStyle = styled.button`
  width: 100%;
  padding: 20px 0;
  font-size: ${({ theme }) => theme.fontSize.Gtitle};
  color: ${({ theme }) => theme.color.gray70};
  background: ${({ theme }) => theme.color.gray20};

  &.active {
    color: ${({ theme }) => theme.color.black};
    background: ${({ theme }) => theme.color.white};
    font-weight: 600;
  }
`;

export type Props = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
  isActive: boolean;
};

const TabTitle = (props: Props): JSX.Element => {
  const { title, setSelectedTab, index, isActive } = props;
  // isActive 는 스타일 정할때 사용

  const handleOnClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <LiStyled>
      <ButtonStyle onClick={handleOnClick} className={`${isActive ? 'active' : ''}`}>
        <span>{title}</span>
      </ButtonStyle>
    </LiStyled>
  );
};

export default TabTitle;

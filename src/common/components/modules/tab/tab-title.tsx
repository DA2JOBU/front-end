import React, { useCallback } from 'react';
import styled from 'styled-components';
import  theme  from '@styles/theme';

const LiStyled = styled.li`
  width: 100%;
  height: 100%;
`;

const ButtonStyle = styled.button`
  width: 100%;
  padding: 20px 0;
  font-size: ${({ theme }) => theme.fontSize.tabTitle};
  color: #b1b1b1;
  background: #f6f6f6;

  &.active {
    color: #262626;
    background: #fff;
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

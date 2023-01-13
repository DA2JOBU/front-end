import React, { useCallback } from 'react';
import styled from 'styled-components';

const LiStyled = styled.li`
  width: 100%;
  height: 100%;
`;

const ButtonStyle = styled.button`
  width: 100%;
  padding: 20px 0;
  border: solid #E6E6E6;
  font-size: ${({ theme }) => theme.fontSize.Stitle};
    color: ${({ theme }) => theme.color.black};
    background: ${({ theme }) => theme.color.white};
  span {
    font-weight: 600;
  }
`;

export type Props = {
  title: string;
};

const RightTabTitle = (props: Props): JSX.Element => {
  const { title } = props;
  // isActive 는 스타일 정할때 사용

  return (
    <LiStyled>
      <ButtonStyle>
        <span>{title}</span>
      </ButtonStyle>
    </LiStyled>
  );
};

export default RightTabTitle;

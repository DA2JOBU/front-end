import { type } from 'os';
import React, { useEffect, useRef, useState } from 'react';
import { StoreID } from 'recoil';
import styled from 'styled-components';
type ButtonSize = 'large' | 'medium' | 'small';

type ButtonProps = {
  size?: ButtonSize | undefined;
  disabled?: boolean;
  color?: string;
  text?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

interface Props {
  text?: string;
  value?: string;
  name?: string;
  onClick?: (e: any) => void;
  mClick: (val: string) => void;
  width?: string;
  disabled?: boolean;
  className?: string;
  height?: string;
  active?: boolean;
  fontSize?: string;
  count?: number | undefined;
  mood?: string;
  lighting?: string;
}

const StyledButton = styled.label`
  /*공통 스타일*/
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  text-align: center;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  padding: 1rem;

  /*크기*/
  font-size: 0.8rem;

  /*색상 */
  background: ${({ theme }) => theme.color.gray20};
  color: ${({ theme }) => theme.color.gray70};
`;

const Container = styled.p`
  .active {
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.orange};
    border: 1px solid ${({ theme }) => theme.color.orange};
  }
  .count {
    background: ${({ theme }) => theme.color.brightOrange};
    color: ${({ theme }) => theme.color.gray85};
  }
  .orange {
    color: ${({ theme }) => theme.color.orange};
  }
`;

const KeywordButton = ({
  text,
  value,
  active,
  height,
  disabled,
  name,
  onClick,
  mClick,
  width,
  fontSize,
  mood,
  lighting,
}: Props) => {
  return (
    <Container>
      <StyledButton
        style={{
          width,
          height,
          fontSize,
        }}
        className={active ? 'active' : ''}
      >
        <span>
          {text}
          {/* <span className="orange">{count}</span> */}
        </span>
        <input
          type="checkbox"
          value={value}
          onChange={(e) => {
            mClick(e.target.value);
          }}
          onClick={onClick}
          name={name}
        />
      </StyledButton>
    </Container>
  );
};

export default KeywordButton;

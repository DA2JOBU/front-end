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
  value?: string;
  name?: string;
  onClick?: (e: any) => void;
  width?: string;
  disabled?: boolean;
  className?: string;
  height?: string;
  active?: boolean;
  fontSize?: string;
  count?: number | undefined;
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
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  border: 1px solid ${({ theme }) => theme.color.black};
`;

const Container = styled.p`
  .active {
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.orange};
    border: 1px solid ${({ theme }) => theme.color.orange};
  }
  .count {
    background: ${({ theme }) => theme.color.white};
  }
`;

const KeywordButton = ({ value, active, height, disabled, name, onClick, width, fontSize, count }: Props) => {
  const [state, setState] = useState<boolean>(active || false);

  return (
    <Container>
      <StyledButton
        style={{
          width,
          height,
          fontSize,
        }}
        className={state ? 'active' : ''}
      >
        <span>{value}</span>
        <input type="checkbox" value={value} onChange={() => setState(!state)} onClick={onClick} name={name} />
      </StyledButton>
    </Container>
  );
};

export default KeywordButton;

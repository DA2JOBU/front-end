import React from 'react';
import styled from 'styled-components';
import { ReactNode } from 'react';

type ButtonWrapperProps = Omit<IButtonProps, 'type' | 'text' | 'iconType'> & {
  buttonType: ButtonType;
  children: React.ReactNode;
};

export type ButtonType = 'submit' | 'text' | 'button';
export type ButtonSize = 'large' | 'medium' | 'small';

export interface IButtonProps {
  type?: ButtonType;
  text: string;
  iconType?: string;
  isBlock?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  href?: string;
  target?: '_self' | '_blank';
  className?: string;
}

const StyledButton = styled.button`
    /*공통 스타일*/
    width: 100%;
    align-items: center;
    outline: none;
    text-align: center;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    padding: 1rem;

    /*크기*/
    font-size: 1rem;

    /*색상 */
    background: ${({ theme }) => theme.color.orange};
    color: ${({ theme }) => theme.color.white};
    
    &:hover{
      background: #FF844B;
    }

    /*기타 */
    & + & {
        margin-left: 1rem;
    }
`;
function SubmitButton({
  type = 'button',
  text,
  iconType,
  isBlock = false,
  size = 'medium',
  disabled = false,
  onClick,
  href,
  target = '_self',
  className,
}: IButtonProps) {
  return (
    <Wrapper
      className={className}
      buttonType={type}
      size={size}
      isBlock={isBlock}
      href={href}
      target={target}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </Wrapper>
  );
}

function Wrapper(props: ButtonWrapperProps) {
  const { href, target, children, ...commonProps } = props;
  return <StyledButton {...commonProps}>{children}</StyledButton>;
}

export default SubmitButton;

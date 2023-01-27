import React from 'react';
import styled from 'styled-components';
import { ReactNode } from 'react';

type ButtonWrapperProps = Omit<IButtonProps, 'type' | 'text' | 'iconType'> & {
  buttonType: ButtonType;
  children: React.ReactNode;
};

export type ButtonType = 'primary' | 'line' | 'text';
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
    display: inline-flex;
    align-items: center;
    outline: none;
    text-align: center;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    padding: 1.6rem 2.4rem;


    /*크기*/
    font-size: 1rem;

    /*색상 */
    background:  ${({ theme }) => theme.color.gray20};
    color: ${({ theme }) => theme.color.gray70};
    color: 
    &:hover{
      background: #FF844B;
    }
    &:active{
      border: 1px solid  ${({ theme }) => theme.color.gray90};
      background: ${({ theme }) => theme.color.orange};
    }

    /*기타 */
    & + & {
        margin-left: 1rem;
    }
`;
function Button({
  type = 'text',
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

type ButtonStyleProps = Pick<ButtonWrapperProps, 'size' | 'isBlock' | 'disabled' | 'buttonType'>;

function Wrapper(props: ButtonWrapperProps) {
  const { href, target, children, ...commonProps } = props;
  return <StyledButton {...commonProps}>{children}</StyledButton>;
}

export default Button;

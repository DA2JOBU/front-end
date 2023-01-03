import React from "react";
import styled from "styled-components";
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
    border-radius: 99px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;


    /*크기*/
    height: 2.25rem;
    font-size: 1rem;

    /*색상 */
    background: #FF5100;
    &:hover{
        background: #FF844B;
    }
    &:active{
        background: #CE4607;
    }

    /*기타 */
    & + & {
        margin-left: 1rem;
    }
`
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
}: IButtonProps){
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
    )
}

type ButtonStyleProps = Pick<ButtonWrapperProps, 'size' | 'isBlock' | 'disabled' | 'buttonType'>;

function Wrapper(props: ButtonWrapperProps) {
  const { href, target, children, ...commonProps } = props;
  return <StyledButton {...commonProps}>{children}</StyledButton>;
}


export default Button;
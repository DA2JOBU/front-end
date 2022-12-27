import React, { MouseEvent } from 'react';
import styled from 'styled-components';
interface Props {
  children?: React.ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
const StyledButton = styled.button`
  /*공통 스타일*/
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  background: none;

  /*크기*/
  height: 2.25rem;
  font-size: 1rem;

  // /*색상 */
  // background: #228be6;
  // &:hover{
  //     background: #339af0;
  // }
  // &:active{
  //     background: #1c7ed6;
  // }

  /*기타 */
  & + & {
    margin-left: 1rem;
  }
`;
const Button = ({ children, ...rest }: Props) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;

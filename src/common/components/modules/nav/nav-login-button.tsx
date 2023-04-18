import React from 'react';
import { LiStyled, ButtonStyle } from './nav-title';

export type NavLoginButtonProps = {
  title: string;
  onClick?: () => void;
};

const NavLoginButton = (props: NavLoginButtonProps): JSX.Element => {
  return (
    <LiStyled>
      <ButtonStyle onClick={props.onClick}>{props.title}</ButtonStyle>
    </LiStyled>
  );
};

export default NavLoginButton;

import React, { ReactElement } from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

type Props = {
  title?: string;
  children?: ReactElement | ReactElement[];
  onClick?: () => void;
};

const Nav = ({ children }: Props): JSX.Element => {
  return <NavContainer>{children}</NavContainer>;
};

export default Nav;
// 껍데기

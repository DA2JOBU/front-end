import React, { ReactElement, useState, FC } from 'react';
import styled from 'styled-components';
import NavTitle, { NavTitleProps } from './nav-title';
import NavLoginButton from './nav-login-button';

const NavContainer = styled.nav`
  width: 100%;
  height: 100%;
`;

const UlStyled = styled.ul`
  display: table;
  padding: 0 28px;
  height: 64px;
  width: 100%;
  margin: 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray30};
`;

type Props = {
  children: ReactElement<NavTitleProps>[];
  preSelectedTabIndex?: number;
};

const Navs = (props: Props): JSX.Element => {
  const { children, preSelectedTabIndex } = props;
  const [selectedNavIndex, setSelectedNavIndex] = useState<number>(preSelectedTabIndex || 0);

  return (
    <NavContainer>
      <UlStyled>
        {children.map((item, index) =>
          item.props.title === '로그인' ? (
            <NavLoginButton key={item.props.title} title={item.props.title} onClick={item.props.onClick} />
          ) : (
            <NavTitle
              key={item.props.title}
              title={item.props.title}
              index={index}
              isActive={index === selectedNavIndex}
              setSelectedNav={setSelectedNavIndex}
            />
          )
        )}
      </UlStyled>
      {children[selectedNavIndex]}
    </NavContainer>
  );
};

export default Navs;

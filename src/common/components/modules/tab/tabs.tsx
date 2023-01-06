import React, { ReactElement, useState, FC } from 'react';
import styled from 'styled-components';
import TabTitle, { Props as TabTitleProps } from './tab-title';

const SearchContainer = styled.section`
  position: absolute;
  left: 0;
  z-index: 1000;
`;

const UlStyled = styled.ul`
  display: flex;
  width: 380px;
`;

const Contents = styled.article`
  display: block;
  height: 100vh;
  background: #fff;
`;

type Props = {
  children: ReactElement<TabTitleProps>[];
  preSelectedTabIndex?: number;
};

const Tabs = (props: Props): JSX.Element => {
  const { children, preSelectedTabIndex } = props;

  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(preSelectedTabIndex || 0);

  return (
    <SearchContainer>
      <UlStyled>
        {children.map((item, index) => (
          <TabTitle
            key={item.props.title}
            title={item.props.title}
            index={index}
            isActive={index === selectedTabIndex}
            setSelectedTab={setSelectedTabIndex}
          />
        ))}
      </UlStyled>
      <Contents>{children[selectedTabIndex]}</Contents>
    </SearchContainer>
  );
};

export default Tabs;

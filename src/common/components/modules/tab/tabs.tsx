import React, { ReactElement, useState, FC } from 'react';
import styled from 'styled-components';
import TabTitle, { Props as TabTitleProps } from './tab-title';

const SearchContainer = styled.section`
  overflow: hidden;
  float: left;
  position: absolute;
  z-index: 25;
  clear: both;
  width: 380px;
  height: calc(100vh - 64px);
`;

const UlStyled = styled.ul`
  display: flex;
  width: 380px;
`;

// const Contents = styled.article`
//   background-color: #f9f9f9;
//   display: block;
//   height: 100%;
//   width: 100%;
// `;

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
      {children[selectedTabIndex]}
    </SearchContainer>
  );
};

export default Tabs;

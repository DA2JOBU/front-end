import React, { ReactElement, useState, FC } from 'react';
import styled from 'styled-components';
import TabTitle, { Props as TabTitleProps } from './tab-title';

const UlStyled = styled.ul`
  display: flex;
  width: 100%;
`;

type Props = {
  children: ReactElement<TabTitleProps>[];
  preSelectedTabIndex?: number;
};

const Tabs = (props: Props): JSX.Element => {
  const { children, preSelectedTabIndex } = props;

  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(preSelectedTabIndex || 0);

  return (
    <section>
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
      <article>{children[selectedTabIndex]}</article>
    </section>
  );
};

export default Tabs;

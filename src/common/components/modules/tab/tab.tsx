import React, { ReactElement } from 'react';
import styled from 'styled-components';

const TabContainer = styled.div`
  width: 380px;
  height: 56px;
`;
type Props = {
  title: string;
  children: ReactElement | ReactElement[];
};

const Tab = ({ children }: Props): JSX.Element => {
  return <TabContainer>{children}</TabContainer>;
};

export default Tab;
// 껍데기

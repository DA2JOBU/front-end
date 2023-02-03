import React, { ReactElement } from 'react';
import styled from 'styled-components';

const TabContainer = styled.article`
  width: 380px;
  height: 100%;

`;
type Props = {
  title?: string;
  children?: ReactElement | ReactElement[];
};

const Tab = ({ children }: Props): JSX.Element => {
  return <TabContainer>{children}</TabContainer>;
};

export default Tab;
// 껍데기

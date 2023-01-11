import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
type Props = {
  children?: ReactElement | ReactElement[];
  onClick?: () => void;
};

const SlideContainer = ({ children }: Props): JSX.Element => {
  return <Container>{children}</Container>;
};

export default SlideContainer;
// 껍데기

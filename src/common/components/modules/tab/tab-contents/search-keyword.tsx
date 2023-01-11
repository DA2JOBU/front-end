import React from 'react';
import styled from 'styled-components';

const KeywordContainer = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  height: 100vh;
`;

const SearchKeyword = () => {
  return <KeywordContainer>Keyword</KeywordContainer>;
};

export { SearchKeyword };

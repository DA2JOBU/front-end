import KeywordCard from '@components/modules/card/keyword-card';
import React from 'react';
import styled from 'styled-components';

const KeywordContainer = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  height: 100vh;
  padding-bottom: 3.8rem;

  overflow-y:auto;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

const SearchKeyword = () => {
  return (
    <KeywordContainer>
      <KeywordCard />
    </KeywordContainer>
  );
};

export { SearchKeyword };

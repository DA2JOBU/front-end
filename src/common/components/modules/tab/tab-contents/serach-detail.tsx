import React from 'react';
import styled from 'styled-components';


const DetailContainer = styled.section`
  overflow-y: auto;
  position: absolute;
  z-index: 26;
  clear: both;
  right: 0px;
  width: 380px;
  height: 100vh;
  background: ${({ theme }) => theme.color.white};

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

const SearchDetail = () => {
  return <DetailContainer>
    <span>fkffkfkf</span>
  </DetailContainer>;
};

export default SearchDetail;

import TopCard from '@components/modules/card/top-card';
import React from 'react';
import { Place } from 'src/types/searchType';
import { places } from 'src/common/api/search';
import styled from 'styled-components';
import Icons from 'public/assets/images/icons';

const SearchTopContainer = styled.div`
  padding-bottom: 4.5rem;
  background: ${({ theme }) => theme.color.white};
  position: relative;
  height: 100vh;
  
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;



const SearchContent = styled.div`
  overflow-y: auto;
`;
export type PropsPlace = {
  address_name?: string;
  category_group_name?: string;
  place_name?: string;
  review?: string | number;
  save?: string | number;
  badge?: string | Element;
  rank?: string | number;
  coment?: string;
};

const SearchTopPlace = (): JSX.Element => {
  return (
    <SearchTopContainer>
      <SearchContent>
        {places.map((place, index) => {
          return <TopCard place={place} key={index} />;
        })}
      </SearchContent>
    </SearchTopContainer>
  );
};

export default SearchTopPlace;

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Input from '@components/elements/Input';
import { useRecoilValue } from 'recoil';
import { keyword, searchList } from 'src/state';
import { SearchPlace } from './search-place';
import { searchElement } from 'src/types/searchType';
import styled from 'styled-components';

const SearchListContainer = styled.section`
  float: left;
  position: absolute;
  z-index: 25;
  top: 64px;
  left: 380px;
  width: 380px;
  background-color: ${({ theme }) => theme.color.white};
  clear: both;
  overflow: hidden;
  height: calc(100vh - 64px);
  border-left: 1px solid ${({ theme }) => theme.color.gray30};
`;

const SearchListTitle = styled.p`
  height: 60px;
  background-color: ${({ theme }) => theme.color.white};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray30};
`;

const SearchListContent = styled.p`
  overflow-y: scroll;
  height: 100%;
`;

const SearchList = () => {
  const lists = useRecoilValue<searchElement[]>(searchList);
  console.log(lists);

  return (
    <SearchListContainer>
      <SearchListTitle>{lists.length}</SearchListTitle>
      <SearchListContent>
        {lists.map((list: searchElement, index: number) => {
          const { address_name, category_group_name, place_name } = list;
          return (
            <SearchPlace
              key={index}
              index={index}
              address_name={address_name}
              category_group_name={category_group_name}
              place_name={place_name}
            />
          );
        })}
      </SearchListContent>
    </SearchListContainer>
  );
};

export { SearchList };

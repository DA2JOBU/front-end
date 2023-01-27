import React from 'react';
import { useRecoilValue } from 'recoil';
import { searchList } from 'src/state';
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

const SearchListTitle = styled.div`
  height: 60px;
  background-color: ${({ theme }) => theme.color.white};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray30};
`;

const SearchListContent = styled.div`
  overflow-y: scroll;
  height: 100%;

`;

type Props = {
  keyword: string;
};

const SearchList = (props: Props) => {
  const { keyword } = props;
  const lists = useRecoilValue<searchElement[]>(searchList);

  return (
    <SearchListContainer>
      <SearchListTitle>
        {keyword}
        {lists.length}
      </SearchListTitle>
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

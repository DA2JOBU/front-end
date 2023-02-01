import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { myPlace, searchList } from 'src/state';
import { SearchPlace } from './search-place';
import { PlaceRegister, searchElement } from 'src/types/searchType';
import styled from 'styled-components';
import { channel } from 'diagnostics_channel';
import { run } from 'node:test';
import { placeExist, registerPlace } from '@api/mapApi';

const SearchListContainer = styled.section`
  float: left;
  position: absolute;
  z-index: 25;
  clear: both;
  width: 380px;
  left: 380px;
  height: calc(100vh - 64px);
  background-color: ${({ theme }) => theme.color.white};
  border-left: 1px solid ${({ theme }) => theme.color.gray30};
  padding-bottom: 3.8rem;
`;

const SearchListTitle = styled.div`
  height: 60px;
  background-color: ${({ theme }) => theme.color.white};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray30};
  padding: 0 30px;
  display: flex;
  align-items: center;

  .title {
    color: ${({ theme }) => theme.color.gray90};
    font-size: 1rem;
    font-weight: 600;
    padding-right: 0.4rem;
  }
  .count {
    color: ${({ theme }) => theme.color.gray80};
    font-size: 0.9rem;
  }
`;

const SearchListContent = styled.div`
  overflow-y: auto;
  height: 100%;
  // position: absolute;
  // top: 64px;
  // width: 100%;
`;

type Props = {
  keyword: string;
};

const SearchList = (props: Props) => {
  const { keyword } = props;
  const [registration, setRegistrantion] = useState<PlaceRegister[]>([]);
  const [isSelected, setIsSelected] = useState<boolean>(false)
  const lists = useRecoilValue<searchElement[]>(searchList);
  console.log(registration);
  const setMyPlaceList = useSetRecoilState(myPlace);

  const getCategory = (category_name: string) => {
    const category_list = category_name.split('>');
    let category = category_list[3] ? category_list[3] : category_list[2] || category_list[1];
    return category;
  };

  const handlerlOnChange = (id: string) => {
    console.log(id);
  };

  const handlerPlace = (list: searchElement, category: string) => {
    const data: any = {
      kakaoId: list.id,
      name: list.place_name,
      category: category,
      x: list.x,
      y: list.y,
      info: {
        url: list.place_url,
        address: list.address_name,
        roadAddress: list.road_address_name,
      },
    };
    registerPlace(data);
    setMyPlaceList(data);
    setRegistrantion(data);
  };

  return (
    <SearchListContainer>
      <SearchListTitle>
        <span className="title">{keyword}</span>
        <span className="count">검색 결과 {lists.length}</span>
      </SearchListTitle>
      <SearchListContent>
        {lists.map((list: searchElement | any, index: number) => {
          let category = getCategory(list.category_name);
          return (
            <SearchPlace
              // onChange={handlerlOnChange}
              setSelectedPlace={setRegistrantion}
              key={index}
              list={list}
              category={category}
              isActive={list.id === registration}
              onClick={() => handlerPlace(list, category)}
            />
          );
        })}
      </SearchListContent>
    </SearchListContainer>
  );
};

export { SearchList };

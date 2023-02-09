import TopCard from '@components/modules/card/top-card';
import React, { useEffect, useState } from 'react';
import { Place, PlaceTopTen } from 'src/types/searchType';
import { getPlaceTopTen, places } from 'src/common/api/search';
import styled from 'styled-components';
import Icons from 'public/assets/images/icons';
import axios from 'axios';

const SearchTopContainer = styled.div`
  padding-bottom: 8rem;
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

const SearchBanner = styled.div`
  width: 100%;
  height: 2.85rem;
  padding: 0 28px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.black};
  background: ${({ theme }) => theme.color.brightOrange};
  .title {
    padding-left: 0.2rem;
  }
`;

const SearchTopPlace = (): JSX.Element => {
  const [places, setPlaces] = useState<Array<PlaceTopTen>>([]);

  useEffect(() => {
    getPlaceTopTen();
  }, []);

  const getPlaceTopTen = async () => {
    const response = await axios.get(process.env.NEXT_PUBLIC_SERVER_URI + 'chart/top5');
    console.log(response.data);
    setPlaces(response.data);
  };

  return (
    <>
      <SearchBanner>
        <Icons.Hand />
        <span className="title"> 회식장소 Top 10</span>
      </SearchBanner>
      <SearchTopContainer>
        <SearchContent>
          {places.map((place: PlaceTopTen, index: React.Key | null | undefined) => {
            return <TopCard place={place} key={index} />;
          })}
        </SearchContent>
      </SearchTopContainer>
    </>
  );
};

export default SearchTopPlace;

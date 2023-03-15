import TopCard from '@components/modules/card/top-card';
import React, { useEffect, useState } from 'react';
import { PlaceTopTen } from 'src/types/searchType';
import styled from 'styled-components';
import Icons from 'public/assets/images/icons';
import axios from 'axios';
import TopSearchDetail from '../tab-detail/top-serach-detail';
import { getPlaceTopTen } from '@api/search';

const SearchContainer = styled.section`
  float: left;
  position: absolute;
  top: 0;
  z-index: 30;
  clear: both;
  width: 23.75rem;
  left: 23.75rem;
  height: calc(100vh - 64px);
  background-color: ${({ theme }) => theme.color.white};
  border-left: 1px solid ${({ theme }) => theme.color.gray30};
  padding-bottom: 3.8rem;
`;

const SearchTopContainer = styled.div`
  padding-bottom: 8rem;
  background: ${({ theme }) => theme.color.white};
  height: calc(100vh - 217px);
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
  const [detailPopup, setVisible] = useState<boolean>(false);
  const [places, setPlaces] = useState<Array<PlaceTopTen>>([]);
  const [place, setPlace] = useState<Array<PlaceTopTen>>([]);

  useEffect(() => {
    getPlaceTopTen().then((res) => {
      setPlaces(res);
    });
  }, []);

  return (
    <>
      {detailPopup && (
        <SearchContainer>
          <TopSearchDetail onClose={() => setVisible(false)} places={place} />
        </SearchContainer>
      )}
      <SearchBanner>
        <Icons.Hand />
        <span className="title"> 회식장소 Top 10</span>
      </SearchBanner>
      <SearchTopContainer>
        <SearchContent>
          {places.length > 0 ? places.map((place: any, index: React.Key | null | undefined) => {
            return (
              <div key={place.id}>
                <TopCard
                  place={place}
                  onClick={() => {
                    setVisible(true);
                    setPlace(place);
                  }}
                />
              </div>
            );
          }) : null}
        </SearchContent>
      </SearchTopContainer>
    </>
  );
};

export default SearchTopPlace;

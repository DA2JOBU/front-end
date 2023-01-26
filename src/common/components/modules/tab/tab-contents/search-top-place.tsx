import TopCard from '@components/modules/card/top-card';
import React from 'react';
import { Place } from 'src/types/searchType';

export type PropsPlace = {
  address_name?: string;
  category_group_name?: string;
  place_name?: string;
//   index?: number;
  review?: string | number;
  save?: string | number;
  badge?: string | Element;
}



const SearchTopPlace = () => {

  const place = { address_name:'서울 중구 주교동', category_group_name:'냉면', place_name:' 우래옥', review:'2', save:'45' };

  return <TopCard place={place} />;
};

export default SearchTopPlace;

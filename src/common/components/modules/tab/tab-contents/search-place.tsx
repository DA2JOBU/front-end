import React from 'react';
import styled from 'styled-components';
import { Place } from 'src/types/searchType';
import PlaceCard from '@components/modules/card/place-card';

const SearchPlace = (props: any): JSX.Element | null => {
  console.log('ㅇㅇㅇ', props);
  // const { address_name, category_group_name, place_name, review, index, save, badge } = props;

  return <PlaceCard place={props} />;
};

export { SearchPlace };

import React from 'react';
import styled from 'styled-components';
import { Place } from 'src/types/searchType';
import PlaceCard from '@components/modules/card/place-card';
import { searchElement } from 'src/types/searchType';

const PlaceContainer = styled.div`
  // height: 100%;
  // overflow: auto;
`;

type Props = {
  list: searchElement;
  id: string;
  category: string;
  onClick: (event?: React.MouseEvent<Element, MouseEvent> | undefined) => void;
  setSelectedPlace: (id: string) => void;
};

function SearchPlace(props: Props): JSX.Element | null {
  const { address_name, category_group_name, place_name, category_name } = props.list;
  const { onClick, category, setSelectedPlace, id } = props;

  const place = {
    address_name,
    category_group_name,
    place_name,
    category_name: category,
  };

  return (
    <PlaceContainer onClick={onClick}>
      <PlaceCard place={place} id={id} onClick={onClick} setSelectedPlace={setSelectedPlace}  />
    </PlaceContainer>
  );
}

export { SearchPlace };

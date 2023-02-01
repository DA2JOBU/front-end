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
  category: string;
  isActive: boolean;
  onClick: (event?: React.MouseEvent<Element, MouseEvent> | undefined) => void;
  setSelectedPlace: (id: any) => void;
};

function SearchPlace(props: Props): JSX.Element | null {
  const { address_name, category_group_name, place_name, id, category_name } = props.list;
  const { onClick, category, isActive, setSelectedPlace } = props;

  const place = {
    address_name,
    category_group_name,
    place_name,
    id,
    category_name: category,
  };

  return (
    <PlaceContainer>
      <PlaceCard place={place}  onClick={onClick} isActive={isActive} setSelectedPlace={setSelectedPlace} />
    </PlaceContainer>
  );
}

export { SearchPlace };

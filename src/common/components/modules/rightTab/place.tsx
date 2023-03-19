import { useState } from 'react';
import styled from 'styled-components';
import DetailPlace from './detailPlace';
import MapPin from '@public/images/map-pin.svg';

const PlaceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.gray85};
`;

const PlaceElement = styled.button`
  margin: 0.5em;
  color: ${({ theme }) => theme.color.gray85};
`;

interface Props {
  placeName: string;
  roadAddress: string;
  address: string;
  index: number;
  date?: string;
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const Place = (props: Props) => {
  const PlaceInfo = props;
  return (
    <PlaceContainer>
      <PlaceElement onClick={props.onClick}>
        <MapPin />
        {PlaceInfo.placeName}
      </PlaceElement>
      <div style={{
        padding: '1px 6px 1px 6px',
        margin: '0.5rem'
      }}>
        {PlaceInfo.date}
      </div>
    </PlaceContainer>
  )
}
export default Place;

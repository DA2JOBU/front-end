import { useState } from 'react';
import styled from 'styled-components';
import SearchList from './searchList';

const PlaceElement = styled.button`
  margin: 0.5em;
  color: ${({ theme }) => theme.color.gray85};
`;

interface Props {
  placeName: string;
  roadAddress: string;
  address: string;
  index: number;
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const Place = (props: Props) => {
    const PlaceInfo = props;
    return (
        <div>
            <PlaceElement onClick={props.onClick}>
                {PlaceInfo.placeName}
            </PlaceElement>
        </div>
    )
}
export default Place;

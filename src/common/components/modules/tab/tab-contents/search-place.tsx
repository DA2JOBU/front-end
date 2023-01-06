import React from 'react';
import styled from 'styled-components';
const PlaceBox = styled.div`
  height: 150px;
  padding: 40px 30px 0 30px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray30};
  .place {
    font-size: ${({ theme }) => theme.fontSize.tabTitle};
    font-weight: 700;
    margin-bottom: 10px;
  }
  .food {
    padding-right: 6px;
    font-size: ${({ theme }) => theme.fontSize.subTitle};
    font-weight: 600;
    color: ${({ theme }) => theme.color.gray90};
    border-right: 1px solid ${({ theme }) => theme.color.gray40};
  }
  .address {
    padding-left: 6px;
  }
`;

type Props = {
  address_name: string;
  category_group_name: string;
  place_name: string;
  index: number;
};

const SearchPlace = (props: Props): JSX.Element | null => {
  console.log('ㅇㅇㅇ', props);
  const { address_name, category_group_name, place_name } = props;

  return (
    <PlaceBox>
      <span className="place">{place_name}</span>
      <p>
        <span className="food">{category_group_name}</span>
        <span className="address">{address_name}</span>
      </p>
    </PlaceBox>
  );
};

export { SearchPlace };

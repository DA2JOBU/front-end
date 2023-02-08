import React from 'react';
import styled from 'styled-components';
import Icons from 'public/assets/images/icons';
import Tabs from '../tabs';
import Tab from '../tab';
import DetailData from './detail-data';
import DetailReview from './detail-review';

type Props = {
  onClose: () => void;
  registration: any;
};

const DetailContainer = styled.section`
  overflow-y: auto;
  position: absolute;
  z-index: 26;
  clear: both;
  right: 0px;
  width: 380px;
  height: 100vh;
  background: ${({ theme }) => theme.color.white};

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

const DetailHeader = styled.div`
  height: 60px;
  background-color: ${({ theme }) => theme.color.white};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray30};
  padding: 0 30px;
  display: flex;
  align-items: center;
  .place-name {
    width: 100%;
    text-align: center;
    margin-right: 18px;
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.black};
  }
`;
const DetailBody = styled.div`
  width: 100%;
`;
const SearchDetail = (props: Props) => {
  const { onClose, registration } = props;
  console.log(registration);
  return (
    <DetailContainer>
      <DetailHeader>
        <Icons.Back onClick={onClose} />
        <span className="place-name">{registration.place_name}</span>
      </DetailHeader>
      <DetailBody>
        <Tabs>
          <Tab title="데이터">
            <DetailData placeList={registration} />
          </Tab>
          <Tab title="리뷰">
            <DetailReview simpleReview={'맛이 좋네요'} ratingAvg={4.5} updatedAt={'2.2 화'} name={'불타는 닭다리'} />
          </Tab>
        </Tabs>
      </DetailBody>
    </DetailContainer>
  );
};

export default SearchDetail;

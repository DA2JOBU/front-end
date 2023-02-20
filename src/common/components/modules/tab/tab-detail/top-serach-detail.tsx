import React from 'react';
import styled from 'styled-components';
import Icons from 'public/assets/images/icons';
import Tabs from '../tabs';
import Tab from '../tab';
import TopDetailData from './top-detail-data';
import TopDetailReview from './top-detail-review';
import DetailData from './detail-data';
import DetailReview from './detail-review';

type Props = {
  onClose: () => void;
  places: any;
};

const DetailContainer = styled.section`
  position: absolute;
  z-index: 26;
  clear: both;
  right: 0px;
  width: 23.75rem;
  height: 100vh;
  background: ${({ theme }) => theme.color.white};
  border-left: 1px solid ${({ theme }) => theme.color.gray30};

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
  overflow-y: auto;
`;
const SearchDetail = (props: Props) => {
  const { onClose, places } = props;

  return (
    <DetailContainer>
      <DetailHeader>
        <Icons.Back style={{ cursor: 'pointer' }} onClick={onClose} />
        <span className="place-name">{places.place_name || places.name}</span>
        {/* <span className="place-name">{places.name}</span> */}
      </DetailHeader>
      <DetailBody>
        <Tabs>
          <Tab title="데이터">
            <TopDetailData placeList={places} info={places.place_Info} status={places.place_stats} />
          </Tab>
          <Tab title="리뷰">
            <TopDetailReview placeStatus={places.place_stats} />
          </Tab>
        </Tabs>
      </DetailBody>
    </DetailContainer>
  );
};

export default SearchDetail;

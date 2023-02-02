import KeywordButton from '@components/elements/keyword-button/base';
import MoneyButton from '@components/elements/keyword-button/money';
import PeopleButton from '@components/elements/keyword-button/people';
import Marker from '@public/images/marker.png';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import RightTabTitle from '../tab';
import Atmosphere from './atmosphere';
import Brightness from './brightness';
import Etc from './etc';
import PlaceButton from './placeKinds';
import Satisfaction from './satisfaction';
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

const UlStyled = styled.ul`
  display: flex;
  width: 380px;
`;

const CardContainer = styled.div`
  width: 100%;
  padding: 35px 30px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray30};
`;

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 0.8rem;

  .people {
    font-size: 1rem;
    color: ${({ theme }) => theme.color.black};
    font-weight: 600;
    padding-right: 4px;
  }
`;

const CardBody = styled.div`
margin-bottom: 1rem;

  p {
    display: flex;
    margin-bottom: 0.4rem;
  }
  .title {
    padding-bottom: 12px;
    .food {
      padding-right: 6px;
      font-size: ${({ theme }) => theme.fontSize.Stitle};
      // font-weight: 600;
      color: ${({ theme }) => theme.color.gray90};
      border-right: 1px solid ${({ theme }) => theme.color.gray40};
    }
    .address {
      padding-left: 6px;
      color: ${({ theme }) => theme.color.gray80};
    }
  }
  .body {
    align-items: center;
    display: flex;

    .star {
      color: ${({ theme }) => theme.color.gray90};
      font-size: 14px;
      padding: 0 18px 0 2px;
      font-weight: 700;
    }

    .review {
      color: ${({ theme }) => theme.color.gray80};
      font-size: 14px;
      padding-right: 10px;
    }
    .save {
      color: ${({ theme }) => theme.color.gray80};
      font-size: 14px;
      padding-right: 10px;
    }
  }
`;

export interface placeDetail{
    placeName:string;
    address:string;
    roadAddress:string;
}


const DetailPlace = (props: placeDetail) => {
    const [placeName, setPlace] = useState(props.placeName);
    const [address, setAddress] = useState(props.address);
    const [roadAddress, setRoadAddress] = useState(props.roadAddress);
    return (
        <DetailContainer className='scrollBar'>
            <UlStyled>
                <RightTabTitle title={placeName} />
            </UlStyled>
            <CardContainer>
            <CardHeader>
                <h2 className="people">장소 구분</h2>
                {/* <TopBadge /> */}
            </CardHeader>
            <CardBody>        
                <PlaceButton />
            </CardBody>
            <CardHeader>
                <h2 className="people">만족도 </h2>
                {/* <TopBadge /> */}
            </CardHeader>
            <CardBody>        
                <Satisfaction />
            </CardBody>
            <CardHeader>
                <h2 className="people">참석인원수 </h2>
                {/* <TopBadge /> */}
            </CardHeader>
            <CardBody>        
                <Satisfaction />
            </CardBody>
            <CardHeader>
                <h2 className="people">인당 가격대 </h2>
                {/* <TopBadge /> */}
            </CardHeader>
            <CardBody>        
                <MoneyButton />
            </CardBody>
            <CardHeader>
                <h2 className="people">분위기 </h2>
                {/* <TopBadge /> */}
            </CardHeader>
            <CardBody>        
                <Atmosphere />
            </CardBody>
            <CardHeader>
                <h2 className="people">조명 밝기</h2>
                {/* <TopBadge /> */}
            </CardHeader>
            <CardBody>        
                <Brightness />
            </CardBody>
            <CardHeader>
                <h2 className="people">기타</h2>
                {/* <TopBadge /> */}
            </CardHeader>
            <CardBody>        
                <Etc />
            </CardBody>
            <CardHeader>
                <h2 className="people">한 줄 리뷰</h2>
            </CardHeader>
            </CardContainer>
        </DetailContainer>
    )
}
export default DetailPlace;
import KeywordButton from '@components/elements/keyword-button/base';
import MoneyButton from '@components/elements/keyword-button/money';
import PeopleButton from '@components/elements/keyword-button/people';
import SubmitButton from '@components/elements/submitButton';
import BaseButton from '@components/elements/keyword-button/base';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import RightTabTitle from '../tab';
import Atmosphere from './atmosphere';
import Brightness from './brightness';
import Etc from './etc';
import PlaceKinds from './placeKinds';
import Satisfaction from './satisfaction';
import { placeExist, registerFirstPlace, registerReview } from '@api/mapApi';
import { PlaceRegister, registerReviewType } from 'src/types/registerType';
import Icons from 'public/assets/images/icons';
import { useRouter } from 'next/router';

const DetailContainer = styled.section`
  position: absolute;
  z-index: 26;
  clear: both;
  width: 23.75rem;
  height: calc(100vh - 64px);
  background: ${({ theme }) => theme.color.white};
  border-left: 1px solid ${({ theme }) => theme.color.gray30};

`;

const DetailHeader = styled.div`
  height: 60px;
  background-color: ${({ theme }) => theme.color.white};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray30};
  padding: 0 18px;
  display: flex;
  align-items: center;
  .place-name {
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    margin-right: 18px;
    color: ${({ theme }) => theme.color.black};
  }
`;

const CardContainer = styled.form`
  overflow-y: auto;
  height: 62%;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }

  width: 100%;
  padding: 45px 28px 35px 28px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray30};
`;

const CardHeader = styled.div`
  padding: 0px 0px 0.8rem 0px;
  width: 100%;
  display: flex;
  align-items: center;

  .people {
    font-size: 1rem;
    color: ${({ theme }) => theme.color.black};
    font-weight: 600;
  }
`;

const CardBody = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  p {
    display: flex;
    margin: 0.3rem 0.1rem;
  }
  .title {
    padding-bottom: 12px;
    .food {
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

const CardFooter = styled.div`
  padding: 0px 28px 0px 28px;
  width: 100%;
  align-items: center;
`;

const InputForm = styled.input`
  width: 100%;
  width: 324px;
  padding: 11px 0 8px 0;
  display: flex;
  border-bottom: 2px solid ${({ theme }) => theme.color.black};
  &::placeholder {
    color: ${({ theme }) => theme.color.gray40};
  }
  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.color.orange};
  }
  &:focus + button > svg {
    stroke: ${({ theme }) => theme.color.orange};
  }
`;

const DivideLine = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.gray30};
  margin: 30px auto;
  width: 100%;        
`

const PlaceInfo = styled.div`
  padding: 30px 28px 12px 28px;
  background: ${({ theme }) => theme.color.gray20};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray30};
`

const AddressContainer = styled.div`
  margin-bottom: 18px;
`

const AddressInfo = styled.label`
  border-radius: 6px;
  flex-direction: row;
  background : ${({ theme }) => theme.color.gray20};
  font-weight : ${({ theme }) => theme.color.gray20};
  align-items: center;
  border: 1px solid #D5D5D5;
  padding: 4px 6px;
  font-size: 1rem;
`;

const BottomContent = styled.div`
  position: fixed;
  padding: 0px 28px;
  z-index: 26;
  right: 0px;
  width: 23.75rem;
  background: ${({ theme }) => theme.color.white};
  bottom: 0;
  vertical-align:middle;
  margin-bottom: 2rem;
`;

export interface placeDetail {
  onClose: () => void;
  placeId: string;
  placeName: string;
  address: string;
  roadAddress: string;
  category: string;//양식
  placeUrl: string;
  x: number;
  y: number;
}

const DetailPlace = (props: placeDetail) => {
  const router = useRouter();
  //카테고리 추출 함수
  const categoryFC = (word: string) => {
    let result = word.slice(word.indexOf('>') + 2);
    if (result.indexOf(' ') > 0)
      result = result.slice(0, result.indexOf(' '));
    return result;
  }
  //입력 데이터
  const [inputData, setInput] = useState({
    placeId: props.placeId,
    placeName: props.placeName,
    address: props.address,
    roadAddress: props.roadAddress,
    category: categoryFC(props.category),
    url: props.placeUrl,
    x: props.x,
    y: props.y,
    placeKinds: '',
    satisfaction: 0,
    participants: 0,
    price: '',
    mood: '',
    light: '',
    isCorkCharge: '',
    isRoom: '',
    isReservation: '',
    isParking: '',
    isAdvancePayment: '',
    isRent: '',
    simpleReview: '',
  });

  //입력 폼 전체 상태 관리
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    console.log(e.target);
    setInput({
      ...inputData,
      [name]: value,
    });
    console.log(inputData);
  };

  //등록 버튼 클릭시 있는지 확인 후 없으면 새로 장소 등록 후 리뷰 등록
  const submitForm = async () => {
    const requestData = inputData;
    const existRes = await placeExist(requestData.placeId)
      .then(async (res) => {
        console.log(res);
        //없다면 장소 등록
        if (res.id === '') {
          const requestD: PlaceRegister = {
            kakaoId: requestData.placeId,
            name: requestData.placeName,
            category: requestData.category,
            x: requestData.x,
            y: requestData.y,
            info: {
              url: requestData.url,
              address: requestData.address,
              roadAddress: requestData.roadAddress
            }
          }
          const firstPlaceres = await registerFirstPlace(requestD).then(async (ress) => {
            //리뷰 등록
            const reqData: registerReviewType = {
              placeId: res.id,
              participants: requestData.participants,
              rating: requestData.satisfaction,
              price_range: requestData.price,
              is_cork_charge: requestData.isCorkCharge != '' ? true : false,
              is_room: requestData.isRoom != '' ? true : false,
              is_reservation: requestData.isReservation != '' ? true : false,
              is_parking: requestData.isParking != '' ? true : false,
              is_advance_payment: requestData.isAdvancePayment != '' ? true : false,
              is_rent: requestData.isRent != '' ? true : false,
              simple_review: requestData.simpleReview,
              reveiwMoodDto: [{
                mood_category: 'Mood',
                mood: requestData.mood
              },
              {
                mood_category: 'Lighting',
                mood: requestData.light
              }
              ]
            };

            const firstPlaceres = await registerReview(reqData).then((ress) => {
              console.log(ress);
              alert('장소가 등록되었습니다');
              router.reload();
            });
          });
        }
        //있는 id면
        else {
          //리뷰 등록
          const reqData: registerReviewType = {
            placeId: res.id,
            participants: requestData.participants,
            rating: requestData.satisfaction,
            price_range: requestData.price,
            is_cork_charge: requestData.isCorkCharge != '' ? true : false,
            is_room: requestData.isRoom != '' ? true : false,
            is_reservation: requestData.isReservation != '' ? true : false,
            is_parking: requestData.isParking != '' ? true : false,
            is_advance_payment: requestData.isAdvancePayment != '' ? true : false,
            is_rent: requestData.isRent != '' ? true : false,
            simple_review: requestData.simpleReview,
            reveiwMoodDto: [{
              mood_category: 'Mood',
              mood: requestData.mood
            },
            {
              mood_category: 'Lighting',
              mood: requestData.light
            }
            ]
          };

          console.log(reqData);

          const firstPlaceres = await registerReview(reqData).then((ress) => {
            console.log(ress);
            alert('장소가 등록되었습니다');
            router.reload();
          });
        }
      });
  };

  return (
    <DetailContainer className="scrollBar">
      <DetailHeader>
        <Icons.Back style={{ cursor: 'pointer' }} onClick={props.onClose} />
        <span className="place-name">{inputData.placeName}</span>
      </DetailHeader>
      <PlaceInfo>
        <AddressContainer>
          <AddressInfo>도로명</AddressInfo> {inputData.roadAddress}
        </AddressContainer>
        <AddressContainer>
          <AddressInfo>지번</AddressInfo> {inputData.address}
        </AddressContainer>
      </PlaceInfo>
      <CardContainer>
        <CardHeader>
          <h2 className="people">장소 구분</h2>
          {/* <TopBadge /> */}
        </CardHeader>
        <CardBody>
          <PlaceKinds onChange={onChange} name='placeKinds' />
        </CardBody>
        <DivideLine />
        <CardHeader>
          <h2 className="people">만족도 </h2>
          {/* <TopBadge /> */}
        </CardHeader>
        <CardBody>
          <Satisfaction onChange={onChange} name="satisfaction" />
        </CardBody>
        <CardHeader>
          <h2 className="people">참석인원수 </h2>
          {/* <TopBadge /> */}
        </CardHeader>
        <CardBody>
          <InputForm placeholder="0" onChange={onChange} name="participants" />
        </CardBody>
        <CardHeader>
          <h2 className="people">인당 가격대 </h2>
          {/* <TopBadge /> */}
        </CardHeader>
        <CardBody>
          <MoneyButton onChange={onChange} name="price" />
        </CardBody>
        <DivideLine />
        <CardHeader>
          <h2 className="people">분위기 </h2>
          {/* <TopBadge /> */}
        </CardHeader>
        <CardBody>
          <Atmosphere onChange={onChange} name="mood" />
        </CardBody>
        <CardHeader>
          <h2 className="people">조명 밝기</h2>
          {/* <TopBadge /> */}
        </CardHeader>
        <CardBody>
          <Brightness onChange={onChange} name="light" />
        </CardBody>
        <CardHeader>
          <h2 className="people">기타</h2>
          {/* <TopBadge /> */}
        </CardHeader>
        <CardBody>
          <Etc onChange={onChange} />
        </CardBody>
        <CardHeader>
          <h2 className="people">한 줄 리뷰</h2>
        </CardHeader>
        <CardBody>
          <InputForm placeholder="후기를 적어주세요." onChange={onChange} name='simpleReview' />
        </CardBody>
      </CardContainer>
      <BottomContent>
        <SubmitButton text="등록하기" onClick={submitForm} />
      </BottomContent>
    </DetailContainer>
  );
};
export default DetailPlace;

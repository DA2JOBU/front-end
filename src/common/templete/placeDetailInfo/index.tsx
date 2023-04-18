import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Icons from 'public/assets/images/icons';
import { getDetailInfo, getDetailKakaoInfo } from '@api/search';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { detailState } from 'src/state';
import RightTabTitle from '@components/modules/rightTab/tab';
import { DetailInfo } from 'src/types/searchType';
import Tabs from './tabs';
import Tab from './tab';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import Atmosphere from '@components/modules/rightTab/detailPlace/atmosphere';

type ModalProps = {
  onClose: () => void;
  id: string;
};

const Title = styled.span`
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    margin-left: 2.5rem;
    color: ${({ theme }) => theme.color.black};
`;

const TitleContainer = styled.div`
  border-radius: 15px;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  height: 3rem;
  .place-name {
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    margin-right: 18px;
    color: ${({ theme }) => theme.color.black};
  }
`;

const TabContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.gray30};
  .addr-container {
    border-bottom: 1px solid ${({ theme }) => theme.color.gray30};
    padding: 1.75rem 0 1.75rem 1.75rem;
    display: flex;
  }
  .address {
    display: flex;
    padding-top: 0.5rem;
    align-items: center;
  }
  .text {
    border-radius: 6px;
    width: 44px;
    padding: 4px;
    text-align: center;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.color.gray85};
    border: 1px solid ${({ theme }) => theme.color.gray30};
  }
  .name {
    padding: 0 0.4rem;
    color: ${({ theme }) => theme.color.gray85};
  }
`;

const AddressContainer = styled.span`
  width: 70%;
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 1.75rem;
  justify-content: space-between;
  padding: 1rem;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;

  .content-body {
    display: flex;
    align-items: center;
    padding-top: 0.5rem;
  }
  .content-text {
    padding-left: 0.2rem;
    color: ${({ theme }) => theme.color.gray85};
  }
  .gray {
    color: ${({ theme }) => theme.color.gray70};
  }
`;

const SearchMap = styled.span`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 20px;
  padding:  6px 8px;
  font-size: 0.75rem;
  display: flex;
  width: 6.4rem;
  height: 2rem;
  margin-top: 1rem;
  align-items: center;
  border 1px solid ${({ theme }) => theme.color.gray30};
  color: ${({ theme }) => theme.color.gray70};
  cursor: pointer;
  
  .map {
    background-color: #fff;
    color: ${({ theme }) => theme.color.gray90};
    padding-left: 0.2rem;
    font-size:0.8rem;
  }
  .clicked{
    stroke: none;
    fill: ${({ theme }) => theme.color.gray70};
  }
  .stroke {
    stroke: none;
    border: ${({ theme }) => theme.color.orange};
  }
  .map-active {
    color:  ${({ theme }) => theme.color.gray70};
    background-color: #fff;
    padding-left: 0.2rem;
    font-size:0.7rem;
  }
`;

const CardHeader = styled.div`
  width: 100%;
  height: 70%;
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
    margin: 0.3rem 0.1rem;
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

const PlaceDetailInfo = (props: ModalProps) => {
  const { onClose, id } = props;
  const setterDetail = useSetRecoilState(detailState);
  const getterDetail = useRecoilValue(detailState);
  const [modalInfo, setInfo] = useState<DetailInfo>();
  const copyToast = () => toast('복사 완료');
  const gotoURL = (url: string) => {
    return window.open(url, '_blank');
  }
  useEffect(() => {
    if (getterDetail === 0) {
      getDetailInfo(id).then((res) => {
        console.log(res);
        setInfo(res);
      });
    }
    else {
      getDetailKakaoInfo(id).then((res) => {
        console.log(res);
        setInfo(res);
      });
    }
  }, [id]);

  return (
    <Overlay>
      <ModalWrap>
        <TitleContainer>
          <Title>
            {modalInfo != undefined ? modalInfo.name : ""}
          </Title>
          <CloseIcon onClick={onClose}>
            <Icons.Close />
          </CloseIcon>
        </TitleContainer>
        <TabContainer>
          <Tabs>
            <Tab title="데이터">
              <div className="addr-container">
                <AddressContainer>
                  <p className="address">
                    <span className="text">도로명</span>
                    <span className="name">{modalInfo?.roadAddress}</span>
                    <CopyToClipboard text={modalInfo != undefined ? modalInfo!.roadAddress : ""} onCopy={() => copyToast()}>
                      <Icons.Copy />
                    </CopyToClipboard>
                  </p>
                  <p className="address">
                    <span className="text">지번</span>
                    <span className="name">{modalInfo?.address}</span>
                    <CopyToClipboard text={modalInfo != undefined ? modalInfo.address : ""} onCopy={() => copyToast()}>
                      <Icons.Copy />
                    </CopyToClipboard>
                  </p>
                </AddressContainer>
                <SearchMap onClick={() => gotoURL(modalInfo!.url)}>
                  <Icons.SearchKeyword />
                  <span className='map'>자세히 보기</span>
                </SearchMap>
              </div>
              <ContentContainer>
                <Container>
                  <span className="text-small">만족도</span>
                  {modalInfo?.ratingAvg ? (
                    <p className="content-body">
                      <Icons.Star className="star" width={14} fill='#ff5100' />
                      <span className="content-text">{modalInfo?.ratingAvg !== null ? modalInfo?.ratingAvg : '-'} </span>
                      <span className="gray">/ 5</span>
                    </p>
                  ) : (
                    <p className="content-body">
                      <Icons.Star className="star" width={14} />
                      <span className="content-text">-</span>
                      <span className="gray">/ 5</span>
                    </p>
                  )}
                </Container>
                <Container>
                  <span className="text-small">평균인원</span>
                  <p className="content-body">
                    <Icons.Humancolor className="star" />
                    <span className="content-text">{modalInfo?.participantsAvg !== null ? modalInfo?.participantsAvg : '-'} </span>
                    <span className="gray">명</span>
                  </p>
                </Container>
                <Container>
                  <span className="text-small">음식종류</span>
                  <p className="content-body">
                    <Icons.FoodColor />
                    <span className="content-text">{modalInfo?.category}</span>
                  </p>
                </Container>
                <Container>
                  <span className="text-small">가격대</span>
                  <p className="content-body">
                    <Icons.Moneycolor />
                    <span className="content-text">{modalInfo?.priceRange !== null ? modalInfo?.priceRange : '-'} </span>
                  </p>
                </Container>
              </ContentContainer>
              <CardHeader>
                <h2 className="people">분위기 </h2>
              </CardHeader>
              <CardBody>
                <Atmosphere name="mood" />
              </CardBody>
            </Tab>
            <Tab title="리뷰">
              <div>
                리뷰
              </div>
            </Tab>
          </Tabs>
        </TabContainer>
      </ModalWrap>
    </Overlay>
  );
};

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

export const ModalWrap = styled.div`
  width: 30rem;
  height: 80%;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  .text-small {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.color.gray70};
  }
`;

export const CloseIcon = styled.div`
  text-align: end;
  cursor: pointer;
`;
export const ModalBody = styled.div`
  text-align: center;
  padding-bottom: 20px;
  p {
    padding-top: 10px;
    font-size: 14px;
  }
  svg {
    padding-top: 10px;
  }
`;

export default PlaceDetailInfo;

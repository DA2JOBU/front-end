import Atmosphere from '@components/modules/rightTab/detailPlace/atmosphere';
import Brightness from '@components/modules/rightTab/detailPlace/brightness';
import Etc from '@components/modules/rightTab/detailPlace/etc';
import React from 'react';
import { searchElement } from 'src/types/searchType';
import styled from 'styled-components';
import Icons from 'public/assets/images/icons';
import BaseButton from './datail-button/base-link';

const DataContainer = styled.form`
  width: 100%;
  padding-top: 45px;
  border-left: 1px solid ${({ theme }) => theme.color.gray30};
`;

const DataHeader = styled.div`
  padding: 0 28px;
  width: 100%;
  padding-bottom: 25px;
  .addr-container {
    border-bottom: 1px solid ${({ theme }) => theme.color.gray30};
    padding-bottom: 1.75rem;
  }
  .address {
    display: flex;
    padding-bottom: 0.5rem;
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

  .text-small {
    font-size: 12px;
    color: ${({ theme }) => theme.color.gray70};
  }
  .star {
    fill: ${({ theme }) => theme.color.gray85};
  }

  border-bottom: 1px solid ${({ theme }) => theme.color.gray30};
`;

const DataBody = styled.div`
  padding: 1.75rem;
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
  img {
    width: 100%;
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
const CardFooter = styled.div`
  width: 100%;
  .title {
    display: flex;
  }
  .comment {
    border-radius: 6px;
    margin-top: 14px;
    font-size: 14px;
  }
`;

const DataFooter = styled.div`
  display: flex;
  padding: 0 1.75rem 0.4rem 1.75rem;
  width: 100%;
  justify-content: space-between;
`;
const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-top: 1.75rem;
`;
const Container = styled.div`
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

const onChange = () => {
  console.log('e');
};
const TopDetailData = (props: { placeList: any; info?: any; status?: any }) => {
  const { placeList, info, status } = props;

  const onClick = () => {
    console.log('복사');
  };
  return (
    <DataContainer>
      <DataHeader>
        <div className="addr-container">
          <p className="address">
            <span className="text">도로명</span>
            <span className="name">{placeList.road_address_name || info.roadAddress}</span>
            <Icons.Copy onClick={onClick} />
          </p>
          <p className="address">
            <span className="text">지번</span>
            <span className="name">{placeList.address_name || info.address}</span>
            <Icons.Copy onClick={onClick} />
          </p>
        </div>
        <ContentContainer>
          <Container>
            <span className="text-small">만족도</span>
            {status ? (
              <p className="content-body">
                <Icons.Star className="star" width={14} />
                <span className="content-text">{status !== null && status.ratingAvrg ? status.ratingAvrg : '-'} </span>
                <span className="gray">/5</span>
              </p>
            ) : (
              <p className="content-body">
                <Icons.Star className="star" width={14} />
                <span className="content-text">-</span>
                <span className="gray">/5</span>
              </p>
            )}
          </Container>
          <Container>
            <span className="text-small">평균인원</span>
            <p className="content-body">
              <Icons.User />
              <span className="content-text">6 명</span>
            </p>
          </Container>
          <Container>
            <span className="text-small">음식종류</span>
            <p className="content-body">
              <Icons.Point />
              <span className="content-text">베트남 음식</span>
            </p>
          </Container>
          <Container>
            <span className="text-small">가격대</span>
            <p className="content-body">
              <Icons.Tag />
              <span className="content-text">3만원</span>
            </p>
          </Container>
        </ContentContainer>
      </DataHeader>
      <DataBody>
        <CardHeader>
          <h2 className="people">분위기 </h2>
        </CardHeader>
        <CardBody>
          <Atmosphere onChange={onChange} count={3} name="mood" value="Nomal" />
        </CardBody>
        <CardHeader>
          <h2 className="people">조명 밝기</h2>
        </CardHeader>
        <CardBody>
          <Brightness onChange={onChange} name="lighting" />
        </CardBody>
        <CardHeader>
          <h2 className="people">기타</h2>
        </CardHeader>
        <CardBody>
          <Etc onChange={onChange} />
        </CardBody>
      </DataBody>
      <DataFooter>
        <BaseButton value="자세히 보기" width="13.35rem" height="52px" fontSize="16px" />
        <BaseButton value="등록하기" width="6.5rem" height="52px" fontSize="16px" />
      </DataFooter>
      <DataFooter>
        <BaseButton value="공유하기" width="20rem" height="52px" fontSize="16px" />
      </DataFooter>
    </DataContainer>
  );
};

export default TopDetailData;
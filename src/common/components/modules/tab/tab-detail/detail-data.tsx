import Atmosphere from '@components/modules/rightTab/detailPlace/atmosphere';
import Brightness from '@components/modules/rightTab/detailPlace/brightness';
import Etc from '@components/modules/rightTab/detailPlace/etc';
import React from 'react';
import { searchElement } from 'src/types/searchType';
import styled from 'styled-components';

const CardContainer = styled.form`
  width: 100%;
  padding: 45px 28px 35px 28px;
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

const onChange = () => {
  console.log('e');
};
const DetailData = (props: { placeList: any }) => {
  const { placeList } = props;
  console.log('ddd', placeList);

  return (
    <CardContainer>
      <CardHeader>
        <h2 className="people">분위기 </h2>
        {/* <TopBadge /> */}
      </CardHeader>
      <CardBody>
        <Atmosphere onChange={onChange} count={6} name="mood" />
      </CardBody>
      <CardHeader>
        <h2 className="people">조명 밝기</h2>
        {/* <TopBadge /> */}
      </CardHeader>
      <CardBody>
        <Brightness onChange={onChange} name="lighting" />
      </CardBody>
      <CardHeader>
        <h2 className="people">기타</h2>
        {/* <TopBadge /> */}
      </CardHeader>
      <CardBody>
        <Etc onChange={onChange} name="" />
      </CardBody>
      <CardFooter>{/* <SubmitButton text="결과보기" onClick={submitForm} /> */}</CardFooter>
    </CardContainer>
  );
};

export default DetailData;

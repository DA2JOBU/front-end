import React, { useState } from 'react';
import styled from 'styled-components';
import TopBadge from '../../elements/top-badge';
import { Place } from 'src/types/searchType';
import ComentBadge from '@components/elements/place-badge';
import Button from '@components/elements/Button';
import PeopleButton from '@components/elements/keyword-button/people';
import MoneyButton from '../../elements/keyword-button/money';
import KeywordButton from '@components/elements/keyword-button/keyword';


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

const KeywordCard = (): JSX.Element => {

  return (
    <CardContainer>
      <CardHeader>
        <h2 className="people">참석인원수</h2>
        {/* <TopBadge /> */}
      </CardHeader>
      <CardBody>        
        <PeopleButton />
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
        <KeywordButton />
      </CardBody>
      <CardHeader>
        <h2 className="people">조명 밝기 </h2>
        {/* <TopBadge /> */}
      </CardHeader>
      <CardBody>        
        <MoneyButton />
      </CardBody>
      <CardHeader>
        <h2 className="people">기타</h2>
        {/* <TopBadge /> */}
      </CardHeader>
      <CardBody>        
        <MoneyButton />
      </CardBody>
      <CardFooter>
        <p className="comment">
          {/* <ComentBadge /> */}
          {/* <p className="comment">''2023 미쉐린가이드에 선정된 서울 평양냉면 맛집</p> */}
        </p>
      </CardFooter>
    </CardContainer>
  );
};

export default KeywordCard;

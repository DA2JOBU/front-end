import React from 'react';
import styled from 'styled-components';
import Badge from '../../elements/top-badge';

const CardContainer = styled.div`
  width: 100%;
  padding: 40px 30px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray30};

  .comment {
    background: ${({ theme }) => theme.color.gray20};
    border-radius: 6px;
    color: ${({ theme }) => theme.color.gray90};
    display: fit contents;
    padding: 10px;
    margin-top: 10px;
    font-size: 14px;
  }
`;

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 8px;

  .place {
    font-size: ${({ theme }) => theme.fontSize.Gtitle};
    font-weight: 700;
    padding-right: 4px;
  }
  .food {
    padding-right: 6px;
    font-size: ${({ theme }) => theme.fontSize.Stitle};
    font-weight: 600;
    color: ${({ theme }) => theme.color.gray90};
    border-right: 1px solid ${({ theme }) => theme.color.gray40};
  }
  .address {
    padding-left: 6px;
    color: ${({ theme }) => theme.color.gray80};
  }
`;

const CardBody = styled.div`
  padding-top: 8px;
  display: flex;
  align-items: center;

  .star {
    color: ${({ theme }) => theme.color.gray90};
    font-size: 14px;
    padding: 0 18px 0 2px;
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
`;

const Card = () => {
  // const { address_name, category_group_name, place_name, review, save, badge } = props;
  return (
    <CardContainer>
      <CardHeader>
        <h2 className="place">우래옥</h2>
        <Badge />
      </CardHeader>
      <CardHeader>
        <span className="food">냉면</span>
        <span className="address">서울 중구 주교동</span>
      </CardHeader>

      <CardBody>
        <img src="assets/images/review-on.svg" />
        <span className="star">4.5</span>
        <span className="review">리뷰 2</span>
        <span className="save">저장 45</span>
      </CardBody>
      <p className="comment">
        <img src="asstes/images/quote.svg" />
        2023 미쉐린가이드에 선정된 서울 평양냉면 맛집
      </p>
    </CardContainer>
  );
};

export default Card;

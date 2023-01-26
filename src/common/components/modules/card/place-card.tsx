import React from 'react';
import styled from 'styled-components';
import TopBadge from '../../elements/top-badge';
import { Place } from 'src/types/searchType';
import ComentBadge from '@components/elements/place-badge';
const CardContainer = styled.div`
  width: 100%;
  padding: 35px 30px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray30};
`;

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 5px;
  justify-content: space-between;

  .title {
    display: flex;
    .place {
      font-size: ${({ theme }) => theme.fontSize.Gtitle};
      color: ${({ theme }) => theme.color.black};
      font-weight: 600;
      padding-right: 4px;
    }
  }
`;

const CardBody = styled.div`
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

const PlaceCard = (props: { place: Place }): JSX.Element => {
  const { address_name, category_group_name, place_name, review, save, badge } = props.place;

  return (
    <CardContainer>
      <CardHeader>
        <p className="title">
          <h2 className="place">{place_name}</h2>
          {/* <TopBadge /> */}
        </p>
        <p className="favorites">
          <img src="assets/images/favorites.svg" alt="favorites" />
        </p>
      </CardHeader>
      <CardBody>
        <p className="title">
          <span className="food">{category_group_name}</span>
          <span className="address">{address_name}</span>
        </p>
        <p className="body">
          <img src="assets/images/review-off.svg" alt="review" />
          <span className="star">0</span>
          <span className="review">리뷰 {review}</span>
          <span className="save">저장 {save}</span>
        </p>
      </CardBody>
      <CardFooter>
        <p className="comment">
          <ComentBadge />
          {/* <p className="comment">''2023 미쉐린가이드에 선정된 서울 평양냉면 맛집</p> */}
        </p>
      </CardFooter>
    </CardContainer>
  );
};

export default PlaceCard;

import React, { useState } from 'react';
import styled from 'styled-components';
import TopBadge from '../../elements/top-badge';
import { Place } from 'src/types/searchType';
import Icons from 'public/assets/images/icons';

const CardContainer = styled.div`
  width: 100%;
  padding: 35px 30px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray30};
  background: ${({ theme }) => theme.color.white};
`;

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 0.3rem;
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
  .clicked {
    fill: ${({ theme }) => theme.color.orange};
    stroke: none;
  }
  .stroke {
    fill: none;
    stroke: ${({ theme }) => theme.color.gray80};
  }
`;

const CardBody = styled.div`
  .title {
    padding-bottom: 12px;
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
  .on {
    fill: ${({ theme }) => theme.color.orange};
    stroke: none;
  }
  .off {
    fill: ${({ theme }) => theme.color.gray70};
    stroke: none;
  }
`;
const CardFooter = styled.div`
  width: 100%;
  .title {
    display: flex;
  }
  .comment {
    background: ${({ theme }) => theme.color.gray20};
    border-radius: 6px;
    color: ${({ theme }) => theme.color.gray90};
    display: fit-contents;
    padding: 10px;
    margin-top: 14px;
    font-size: 14px;
    img {
      padding-right: 4px;
    }
  }
`;

const TopCard = (props: { place: Place }): JSX.Element => {
  const { address_name, category_group_name, place_name, ratingAvg, reviewCnt, wantPlaceCnt, coment, rank, id } =
    props.place;
  const [active, setActive] = useState<boolean>(false);

  const saveHandler = (e: React.MouseEvent) => {
    setActive(!active);
    // 등록으로 연결
    
  };

  return (
    <CardContainer>
      <CardHeader>
        <div className="title">
          <h2 className="place">{place_name}</h2>
          <TopBadge rank={rank} />
        </div>
        <p className="favorites" onClick={saveHandler}>
          <Icons.Favorites className={active ? 'clicked' : 'stroke'} />
        </p>
      </CardHeader>
      <CardBody>
        <p className="title">
          <span className="food">{category_group_name}</span>
          <span className="address">{address_name}</span>
        </p>
        <p className="body">
          <Icons.Star className={ratingAvg !== '0' ? 'on' : 'off'} width={14} />
          <span className="star">{ratingAvg ? ratingAvg : 0}</span>

          <span className="review">리뷰 {reviewCnt ? reviewCnt : '-'}</span>
          <span className="save">저장 {wantPlaceCnt ? wantPlaceCnt : '-'}</span>
        </p>
      </CardBody>
      <CardFooter>
        <p className="comment">
          <img src="assets/images/quote.svg" />
          {coment}
        </p>
      </CardFooter>
    </CardContainer>
  );
};

export default TopCard;

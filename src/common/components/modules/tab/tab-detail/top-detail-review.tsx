import ComentBadge from '@components/elements/place-badge';
import Icons from 'public/assets/images/icons';
import styled from 'styled-components';
const Container = styled.div`
  width: 100%;
  padding: 1.8rem 1.3rem;
  .review-text {
    font-weight: 600;
  }
  .count {
    color: ${({ theme }) => theme.color.orange};
  }
`;

const ReviewContainer = styled.div`
  width: 100%;
`;

const Comment = styled.p`
  background: ${({ theme }) => theme.color.gray20};
  border-radius: 6px;
  color: ${({ theme }) => theme.color.gray90};
  display: fit-contents;
  padding: 0.8rem;
  margin-top: 14px;
  font-size: 14px;
  img {
    padding-right: 4px;
  }
`;

const Review = styled.span`
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
  .star,
  .name {
    color: ${({ theme }) => theme.color.gray80};
    font-size: 14px;
    font-weight: 600;
  }
  .name {
    padding-left: 0.3rem;
  }
  .date {
    color: ${({ theme }) => theme.color.gray70};
    font-size: 12px;
    padding-left: 0.3rem;
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

const TopDetailReview = (props: {placeStatus: any}) => {
  const { placeStatus } = props;
  // console.log(placeStatus.simpleReview)
  return (
    <Container>
      <p className="review-text">
        {/* 리뷰 <span className="count">{placeStats.reviewCnt}</span> */}
      </p>
      {placeStatus.simpleReview ? (
        <ReviewContainer>
          <Comment>{placeStatus.simpleReview}</Comment>
          <Review>
            <Icons.Star className={placeStatus.ratingAvg !== 0 ? 'on' : 'off'} width={14} />
            <span className="star">{placeStatus.ratingAvg}</span>
            <span className="name">{placeStatus.name}</span>
            <span className="date">{placeStatus.updatedAt}</span>
          </Review>
        </ReviewContainer>
      ) : (
        <Icons.ReviewBoard />
      )}
    </Container>
  );
};

export default TopDetailReview;

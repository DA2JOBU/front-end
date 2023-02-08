import axios from 'axios';

export const places = [
  {
    address_name: '서울 중구 무교동',
    category_group_name: '꽃등심',
    place_name: '참숯골',
    reviewCnt: '7',
    wantPlaceCnt: '45',
    rank: '1',
    ratingAvg: '0',
    simple_review: '매일 최고 품질의 한우를 엄선하는 숙성 소고기 맛집',
  },
  {
    address_name: '서울 중구 주교동',
    category_group_name: '냉면',
    place_name: '우래옥',
    reviewCnt: '2',
    wantPlaceCnt: '45',
    rank: '2',
    ratingAvg: '4.5',
    simple_review: '2023 미쉐린가이들에 선정된 서울 평양냉면 맛집',
  },
  {
    address_name: '서울 중구 공덕동',
    category_group_name: '고기',
    place_name: '락희옥 마포본점',
    reviewCnt: '2',
    wantPlaceCnt: '45',
    rank: '3',
    ratingAvg: '4.5',
    simple_review: '와인 콜키지 프리인 고급진 분위기의 한정식 맛집',
  },
  {
    address_name: '서울 중구 공덕동',
    category_group_name: '고기',
    place_name: '락희옥 마포본점',
    reviewCnt: '2',
    wantPlaceCnt: '45',
    rank: '3',
    ratingAvg: '4.5',
    simple_review: '와인 콜키지 프리인 고급진 분위기의 한정식 맛집',
  },
  {
    address_name: '서울 중구 공덕동',
    category_group_name: '고기',
    place_name: '락희옥 마포본점',
    reviewCnt: '2',
    wantPlaceCnt: '45',
    rank: '3',
    ratingAvg: '4.5',
    simple_review: '와인 콜키지 프리인 고급진 분위기의 한정식 맛집',
  },

  {
    address_name: '서울 중구 공덕동',
    category_group_name: '고기',
    place_name: '락희옥 마포본점',
    reviewCnt: '2',
    wantPlaceCnt: '45',
    rank: '3',
    ratingAvg: '4.5',
    simple_review: '와인 콜키지 프리인 고급진 분위기의 한정식 맛집',
  },
];

export async function getPlaceTopTen() {
  let placeTopTen = [];
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_SERVER_URI + 'chart/top5');
    placeTopTen = response.data;
  } catch (error) {
    console.error(error);
  }

  return placeTopTen;
}

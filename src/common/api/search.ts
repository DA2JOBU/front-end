import axios from 'axios';
import qs from 'qs';

//top5? top10 가져오기
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

//키워드 호출
export async function getKeyword(data: any) {
  const query = qs.stringify(data);
  return await axios.get(process.env.NEXT_PUBLIC_SERVER_URI + `place/keyword?${query}`);
}

//id로 상세정보 호출
export const getDetailInfo = async (id: string) => {
  const apiUrl: string = process.env.NEXT_PUBLIC_SERVER_URI + `place/detail/${id}`;
  return await fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + sessionStorage.getItem('jwtToken'),
      },
  })
      .then((res) => res.json())
      .then((res) => res);
}

import axios from 'axios';
import qs from 'qs';

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

export async function getKeyword(data: any) {
  const query = qs.stringify(data);
  return await axios.get(process.env.NEXT_PUBLIC_SERVER_URI + `place/keyword?${query}`);
}

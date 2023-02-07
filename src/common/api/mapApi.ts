import axios, { AxiosPromise } from 'axios';
import { PlaceRegister, placeUUID, registerPlace, registerReviewType } from 'src/types/registerType';
import { reviewedPlaceList, searchElement } from 'src/types/searchType';


//등록된 리스트 가져오기
export const getRegisterList = async () => {
  const apiUrl: string = process.env.NEXT_PUBLIC_SERVER_URI + 'place/reviewed';
  return await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => resp.json())
    .then((resp: reviewedPlaceList[]) => {
      return resp;
    });
};

//처음 장소등록인지 아닌지 확인하는 api
export const placeExist = async (kakaoId: string) => {
  const apiUrl: string = process.env.NEXT_PUBLIC_SERVER_URI + 'place/exists/' + kakaoId;
  return await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res: placeUUID) => res);
};

//첫 장소 등록
export const registerFirstPlace = async (data: PlaceRegister) => {
  console.log('data', data)

  const apiUrl: string = process.env.NEXT_PUBLIC_SERVER_URI + 'place';
  return await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

//리뷰 등록
export const registerReview = async (data: registerReviewType) => {
  const apiUrl: string = process.env.NEXT_PUBLIC_SERVER_URI + 'place-review';
  return await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('jwtToken'),
    },
    body: JSON.stringify(data),
  })
}

export const deletedPlace = async (id: string) => {
  const apiUrl: string = process.env.NEXT_PUBLIC_SERVER_URI + 'want-place';
  return await fetch(apiUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
//카카오 정보를 가져올 때
export interface searchElement {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: number;
  y: number;
}

export interface Place {
  id?: string | number;
  address_name?: string;
  category_group_name?: string;
  category_name?: string | undefined;
  place_name?: string;
  reviewCnt?: string | number;
  wantPlaceCnt?: string | number;
  badge?: string | Element;
  coment?: string;
  rank?: string | number;
  ratingAvg?: string | number;
}

//이미 리뷰가 있는 장소 가져오는 타입
export interface reviewedPlaceList {
  id: string;
  name: string;
  x: string;
  y: string;
}

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
  lighting?: string;
  mood?: string;
  rating_avrg?: number;
  review_cnt?: number;
  wantPlaceCnt?: number;
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

export interface PlaceTopTen {
  id?: string;
  kakaoId?: string;
  place_name?: string;
  category?: string;
  x?: string;
  y?: string;
  createdAt?: string;
  updatedAt?: string;
  place_stats?: {
    rank?: string | number;
    id?: string;
    lighting?: string;
    mood?: string;
    ratingAvrg?: number;
    reviewCnt?: number;
    updatedAt?: string;
  };
  place_Info?: {
    id?: string;
    url?: string;
    address?: string;
    roadAddress?: string;
    createdAt?: string;
    updatedAt?: string;
    wantPlaceCnt?: number | string;
    simple_review?: string;
  };
}

export interface KeywordSearchDto {
  participants?: {
    min?: number | null;
    max?: number | null;
  };
  price?: string | null;
  lighting?: string | null;
  mood?: string | null;
  etc?: {
    is_cork_charge?: boolean;
    is_rent?: boolean;
    is_room?: boolean;
    is_reservation?: boolean;
    is_parking?: boolean;
    is_advance_payment?: boolean;
  };
}

export interface KeywordSearchResult {
  E_address: string;
  id: string;
  name: string;
  kakaoid: string;
  category: string;
  x: string;
  y: string;
  wantPlaceCnt: number,
  mood: string;
  lighting: string;
  review_cnt: number;
  rating_avrg: number;
}
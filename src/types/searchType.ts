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
  x: string;
  y: string;
}

//최초 장소 등록하는 info 정보
export interface searchElementInfo {
  url: string;
  address: string;
  roadAddress: string;
}

export interface registerPlace {}

export interface Place {
  address_name?: string;
  category_group_name?: string;
  place_name?: string;
//   index?: number;
  review?: string | number;
  save?: string | number;
  badge?: string | Element;
}


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
};

//최초 장소 등록하는 정보
export interface registerPlace {
    kakaoId: string;
    name: string;
    category: string;
    x: number;
    y: number;
    info: searchElementInfo;
}

//최초 장소 등록하는 info 정보
export interface searchElementInfo {
    url: string;
    address: string;
    roadAddress: string;
}

//리뷰 등록하기 타입
export interface registerPlace { }

export interface Place {
    address_name?: string;
    category_group_name?: string;
    place_name?: string;
    //   index?: number;
    review?: string | number;
    save?: string | number;
    badge?: string | Element;
}

//리뷰 등록하기
export interface registerReview {
    placeId: string;
    participants: number;
    rating: number;
    price_range: string;
    is_cork_charge: boolean;
    is_room: boolean,
    is_reservation: boolean,
    is_parking: boolean,
    is_advance_payment: true,
    is_rent: true,
    simple_review: string;
    reveiwMoodDto: reviewMoodDto;
}

export interface reviewMoodDto {
    mood_category: string;
    mood: string;
}

//이미 리뷰가 있는 장소 가져오는 타입
export interface reviewedPlaceList {
    id: string;
    name: string;
    x: string;
    y: string;
}

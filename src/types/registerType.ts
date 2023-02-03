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

//리뷰 등록하기
export interface registerReview {
    placeId: string;
    participants: number;
    rating: number;
    price_range: string;
    is_cork_charge: boolean;
    is_room: boolean;
    is_reservation: boolean;
    is_parking: boolean;
    is_advance_payment: true;
    is_rent: true;
    simple_review: string;
    reveiwMoodDto: reviewMoodDto;
}

//분위기 타입
export interface reviewMoodDto {
    mood_category: string;
    mood: string;
}
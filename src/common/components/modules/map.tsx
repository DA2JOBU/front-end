import { getRegisterList } from '@api/mapApi';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { keyword, keywordSearch, mapInSearch, searchList } from 'src/state';
import { reviewedPlaceList, searchElement } from 'src/types/searchType';
import { propsType } from '../../templete/contents';
import PlaceDetailInfo from 'src/common/templete/placeDetailInfo';

interface placeType {
  place_name: string;
  road_address_name: string;
  address_name: string;
  phone: string;
  place_url: string;
}

// head에 작성한 kakao API 불러오기
// const { kakao } = window as any;

const Map = (props: propsType, mapContainer: HTMLDivElement | null) => {
  //검색 결과를 담는 것
  const setterSearchList = useSetRecoilState(searchList);
  const getterSearchList = useRecoilValue(searchList);

  //키워드 값을 비교하기 위한 변수
  const [keyword, setKeyword] = useState(props.searchKeyword);

  // 마커를 담는 배열
  const [registerPos, setRegister] = useState<searchElement[]>([]);

  //상세정보에 필요한 상태
  const [detailInfoState, setDetailInfo] = useState(false);
  const [detailId, setId] = useState('');


  const inMap = useRecoilValue(mapInSearch);

  let markers: any[] = [];

  //키워드가 바뀌면 호출하는 부수함수
  useEffect(() => {
    setKeyword(props.searchKeyword);
  }, [props.searchKeyword]);

  //recoil의 atom값이 변경되면 호출
  useEffect(() => {
    if (getterSearchList.length === 0) {
      getRegisterList().then((res: any) => {
        setRegister(res);
      });
    } else {
      setRegister(getterSearchList);
    }
  }, [getterSearchList]);

  // 검색어가 바뀌거나 마커가 바뀌면 재렌더링
  useEffect(() => {
    if (!mapContainer && registerPos.length == 0) return;
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new window.kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

      // 지도를 생성
      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      window.kakao.maps.event.addListener(map, 'dragend', function() {        
          
          // 지도 중심좌표를 얻어옵니다 
          var latlng = map.getCenter();
          //map.setCenter(latlng.getLat());
          map.setCenter(new window.kakao.maps.LatLng(latlng.getLat(), latlng.getLng()));
          console.log('호출중?', map.getCenter());
          mapOption.center = new window.kakao.maps.LatLng(latlng.getLat(), latlng.getLng())
          
          // var message = '변경된 지도 중심좌표는 ' + latlng.getLat() + ' 이고, ';
          // message += '경도는 ' + latlng.getLng() + ' 입니다';
          
          // let resultDiv = document.getElementById('result');  
          // resultDiv!.innerHTML = message;
          
      });
      

      // 장소 검색 객체를 생성
      const ps = new window.kakao.maps.services.Places();

      // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성
      const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

      // 키워드로 장소를 검색합니다
      if (keyword != props.searchKeyword) {
        searchPlaces();
      }

      // 키워드 검색을 요청하는 함수
      function searchPlaces() {
        let keyword2 = props.searchKeyword;
        if (!keyword2.replace(/^\s+|\s+$/g, '')) {
          // console.log('키워드를 입력해주세요!');
          return false;
        }
        // 장소검색 객체를 통해 키워드로 장소검색을 요청
        console.log(map.getCenter());
        ps.keywordSearch(keyword2, placesSearchCB, !inMap ? null : { location: map.getCenter(), radius: 1000 });
      }

      // 장소검색이 완료됐을 때 호출되는 콜백함수
      function placesSearchCB(data: any, status: any, pagination: any) {
        if (status === window.kakao.maps.services.Status.OK) {
          // 정상적으로 검색이 완료됐으면
          // 검색 목록과 마커를 표출
          displayPlaces(data);
          setterSearchList(data);
          // 페이지 번호를 표출
          //displayPagination(pagination);
        } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
          alert('검색 결과가 존재하지 않습니다.');
          return;
        } else if (status === window.kakao.maps.services.Status.ERROR) {
          alert('검색 결과 중 오류가 발생했습니다.');
          return;
        }
      }

      for (let i = 0; i < registerPos?.length; i++) {
        let placePosition = new window.kakao.maps.LatLng(registerPos[i].y, registerPos[i].x);
        addMarker(placePosition, i, undefined);
      }
      displayPlaces(registerPos);

      // 검색 결과 목록과 마커를 표출하는 함수
      function displayPlaces(places: string | any[]) {
        const listEl = document.getElementById('places-list'),
          resultEl = document.getElementById('search-result'),
          fragment = document.createDocumentFragment(),
          bounds = new window.kakao.maps.LatLngBounds();

        // 검색 결과 목록에 추가된 항목들을 제거
        listEl && removeAllChildNods(listEl);

        // 지도에 표시되고 있는 마커를 제거
        removeMarker();

        for (var i = 0; i < places.length; i++) {
          // 마커를 생성하고 지도에 표시
          let placePosition = new window.kakao.maps.LatLng(places[i].y, places[i].x),
            marker = addMarker(placePosition, i, undefined),
            itemEl = getListItem(i, places[i]), // 검색 결과 항목 Element를 생성
            id = places[i].id;

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가
          bounds.extend(placePosition);

          // 마커와 검색결과 항목에 mouseover 했을때
          // 해당 장소에 인포윈도우에 장소명을 표시
          // mouseout 했을 때는 인포윈도우를 닫기
          (function (marker, title) {
            window.kakao.maps.event.addListener(marker, 'mouseover', function () {
              displayInfowindow(marker, title);
            });

            window.kakao.maps.event.addListener(marker, 'mouseout', function () {
              infowindow.close();
            });

            // 마커에 클릭이벤트를 등록합니다
            window.kakao.maps.event.addListener(marker, 'click', function() {
              console.log(id);
              setId(id);
              setDetailInfo(true);
            });

            itemEl.onmouseover = function () {
              displayInfowindow(marker, title);
            };

            itemEl.onmouseout = function () {
              infowindow.close();
            };
          })(marker, places[i].place_name);

          fragment.appendChild(itemEl);
        }

        // 검색결과 항목들을 검색결과 목록 Element에 추가
        listEl && listEl.appendChild(fragment);
        if (resultEl) {
          resultEl.scrollTop = 0;
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정
        map.setBounds(bounds);
      }

      // 검색결과 항목을 Element로 반환하는 함수
      function getListItem(index: number, places: placeType) {
        const el = document.createElement('li');
        let itemStr = `
          <div class="info">
            <span class="marker marker_${index + 1}">
              ${index + 1}
            </span>
            <a href="${places.place_url}">
              <h5 class="info-item place-name">${places.place_name}</h5>
              ${
                places.road_address_name
                  ? `<span class="info-item road-address-name">
                    ${places.road_address_name}
                   </span>
                   <span class="info-item address-name">
                 	 ${places.address_name}
               	   </span>`
                  : `<span class="info-item address-name">
             	     ${places.address_name}
                  </span>`
              }
              <span class="info-item tel">
                ${places.phone}
              </span>
            </a>
          </div>
          `;

        el.innerHTML = itemStr;
        el.className = 'item';

        return el;
      }

      // 마커를 생성하고 지도 위에 마커를 표시하는 함수
      function addMarker(position: any, idx: number, title: undefined) {
        var imageSrc = 'assets/images/marker.svg', // 마커 이미지 url, 스프라이트 이미지
          imageSize = new window.kakao.maps.Size(24, 40), // 마커 이미지의 크기
          // imgOptions = {
          //   spriteSize: new window.kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
          //   spriteOrigin: new window.kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
          //   offset: new window.kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
          // },
          markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize),
          marker = new window.kakao.maps.Marker({
            position: position, // 마커의 위치
            image: markerImage,
          });

        marker.setMap(map); // 지도 위에 마커를 표출
        markers.push(marker); // 배열에 생성된 마커를 추가

        return marker;
      }

      // 지도 위에 표시되고 있는 마커를 모두 제거합니다
      function removeMarker() {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
        markers = [];
      }

      // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수
      // 인포윈도우에 장소명을 표시
      function displayInfowindow(marker: any, title: string) {
        const content = '<div style="padding:5px;z-index:1;" class="marker-title">' + title + '</div>';

        infowindow.setContent(content);
        infowindow.open(map, marker);
      }

      // 검색결과 목록의 자식 Element를 제거하는 함수
      function removeAllChildNods(el: HTMLElement) {
        while (el.hasChildNodes()) {
          el.lastChild && el.removeChild(el.lastChild);
        }
      }
    });
  }, [mapContainer, props.searchKeyword, registerPos]);

  return (
    <div className="map-container">
      <div id="map" className="map" style={{ width: '100vw', height: '100vh' }}></div>
      {detailInfoState && <PlaceDetailInfo onClose={() => setDetailInfo(false)} id={detailId}/>}
    </div>
  );
};

export default Map;

import React, { FC, useState, useEffect } from "react";

const Map: FC = () => {
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);

  useEffect(() => {
    const $script = document.createElement("script");
    $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;
    $script.addEventListener("load", () => setMapLoaded(true));
    document.head.appendChild($script);
  }, []);

  useEffect(() => {
    if (!mapLoaded) return;
    
    // let markers = [
    //     {
    //         position: new window.kakao.maps.LatLng(33.450701, 126.570667)
    //     },
    //     {
    //         position: new window.kakao.maps.LatLng(33.450001, 126.570467),
    //         text: '텍스트를 표시할 수 있어요!' // text 옵션을 설정하면 마커 위에 텍스트를 함께 표시할 수 있습니다
    //     }
    // ];

    window.kakao.maps.load(() => {
      let container = document.getElementById("map");
      let options = {
        center: new window.kakao.maps.LatLng(37.5666805, 126.9784147),
        level: 3,
      };

        let map = new window.kakao.maps.Map(container, options);

        //마커 생성
        let marker = new window.kakao.maps.Marker({ 
            // 지도 중심좌표에 마커를 생성합니다 
            position: map.getCenter()
        }); 
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(map, 'click', function(mouseEvent:any) {        
            
            // 클릭한 위도, 경도 정보를 가져옵니다 
            var latlng = mouseEvent.latLng; 
            
            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
            
        });
    });
  }, [mapLoaded]);

  return (
    <div
      id="map"
      style={{
        width: "auto",
        height: "100vh",
      }}
    ></div>
  );
};

export default Map;

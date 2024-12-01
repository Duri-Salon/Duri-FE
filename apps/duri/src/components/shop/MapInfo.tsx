import { useEffect, useState } from 'react';

import { Flex } from '@duri-fe/ui';
import styled from '@emotion/styled';

let mapInstance: naver.maps.Map | undefined = undefined;

const loadScript = (src: string, callback: () => void) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.onload = () => callback();
  document.head.appendChild(script);
};

export const MapInfo = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  // 지도 로딩 상태
  const [isMapLoaded, setMapLoaded] = useState<boolean>(false);

  const initMap = () => {
    // 추가 옵션 설정
    const mapOptions = {
      zoomControl: false,
      center: new naver.maps.LatLng(latitude, longitude),
      zoom: 16,
    };

    // 지도 초기화 확인
    if (document.getElementById('map')) {
      mapInstance = new naver.maps.Map('map', mapOptions);
    }

    // Marker 생성
    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(latitude, longitude),
      map: mapInstance,
    });

    // Marker 클릭 시 지도 초기화
    naver.maps.Event.addListener(marker, 'click', () => {
      mapInstance?.setCenter(new naver.maps.LatLng(latitude, longitude));
      mapInstance?.setZoom(16);
    });

    // 지도 로드 완료
    setMapLoaded(true);
  };

  const naverMapId = import.meta.env.NAVER_MAP_CLIENT_ID;
  useEffect(() => {
    // 스크립트 로딩 확인
    if (typeof naver === 'undefined') {
      loadScript(
        `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${naverMapId}`,
        initMap,
      );
    } else {
      initMap();
    }
  }, [latitude, longitude]);

  return (
    <>
      {/* 위치 정보(지도) */}
      <MapWrapper direction="column">
        {isMapLoaded && <Flex id="map" />}
      </MapWrapper>
    </>
  );
};

const MapWrapper = styled(Flex)`
  height: calc(100vh - 92px);
`;

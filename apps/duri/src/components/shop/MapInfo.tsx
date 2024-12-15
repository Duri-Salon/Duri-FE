import { forwardRef, Suspense, useEffect, useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';

import { LatLngType } from '@duri/assets/types/map';
import useMakeCurrentLocationMarker from '@duri/hooks/useMakeCurrentMarker';
import useMakeShopMarkers from '@duri/hooks/useMakeShopMarkers';
import { RelativeMobile } from '@duri/pages/Shop';
import { Button, Flex, MyLocation, Send, Text, theme } from '@duri-fe/ui';
import { ShopInfoType, useBottomSheet } from '@duri-fe/utils';
import styled from '@emotion/styled';

import { SendRequestQBox } from './SendRequesQBox';
import { ShopLine } from './ShopLine';

interface MapProps {
  shops: ShopInfoType[];
  location: { loaded: boolean; coordinates: LatLngType };
  mapInstance: naver.maps.Map | undefined;
  isSearchMode: boolean;
  changeSearchMode: () => void;
}

export const MapInfo = forwardRef<HTMLDivElement, MapProps>(
  ({ shops, location, mapInstance, isSearchMode, changeSearchMode }, ref) => {
    const { loaded, coordinates } = location;
    const { naver } = window;

    const [selectedShop, setSelectedShop] = useState<ShopInfoType | null>(null);

    // 가게 정보 바텀시트
    const {
      openSheet: openShopInfoSheet,
      closeSheet: closeShopInfoSheet,
      bottomSheetProps: shopInfoSheetProps,
    } = useBottomSheet({
      maxHeight: 300,
      isMap: true,
      onDismiss: () => {
        changeSearchMode();
        setSelectedShop(null); // 선택된 가게 초기화
        closeShopInfoSheet(); // 바텀시트 닫기
      },
    });

    // 요청서 전송용
    const {
      openSheet: openRequestSheet,
      closeSheet: closeRequestSheet,
      bottomSheetProps: requestSheetProps,
    } = useBottomSheet({
      maxHeight: 552,
    });

    // 버튼 누르면 현재 위치로 이동하도록
    const moveToCurrentLocation = () => {
      if (mapInstance && coordinates) {
        mapInstance.panTo(
          new naver.maps.LatLng(coordinates.lat, coordinates.lng),
        );
        mapInstance.setZoom(16);
      }
    };

    // 현재 위치 마커 관리
    useMakeCurrentLocationMarker(mapInstance, coordinates);

    // 샵 마커 관리
    useMakeShopMarkers(mapInstance, shops, setSelectedShop, openShopInfoSheet);

    // 검색 -> 첫 번째 가게 바텀시트 열고 지도 중심 이동
    useEffect(() => {
      if (isSearchMode && shops.length > 0) {
        const firstShop = shops[0];
        setSelectedShop(firstShop);

        // 지도 중심을 첫 번째 가게 좌표로 이동
        if (mapInstance) {
          mapInstance.panTo(
            new naver.maps.LatLng(firstShop.shopLat, firstShop.shopLon),
          );
        }

        openShopInfoSheet();
      }
    }, [shops, mapInstance, openShopInfoSheet]);

    return (
      <RelativeMobile>
        {/* 위치 정보(지도) */}
        {loaded && (
          <>
            <MapWrapper ref={ref} direction="column">
              <Suspense fallback={<div>Loading Map...</div>}>
                <Flex id="map" />
              </Suspense>
            </MapWrapper>
            <LocationBtn justify="flex-end" padding="0 13px">
              <Button
                onClick={moveToCurrentLocation}
                width="44px"
                height="44px"
                bg={theme.palette.White}
                borderRadius="99px"
                padding="0"
              >
                <MyLocation
                  width={36}
                  height={36}
                  color={theme.palette.Gray400}
                />
              </Button>
            </LocationBtn>
            {selectedShop && (
              <BottomSheet {...shopInfoSheetProps}>
                <Flex direction="column" padding="4px 24px" gap={14}>
                  <ShopLine
                    key={selectedShop.shopId}
                    id={selectedShop.shopId}
                    title={selectedShop.shopName}
                    score={selectedShop.shopRating}
                    reviewNum={selectedShop.reviewCnt}
                    distance={selectedShop.distance}
                    address={selectedShop.shopAddress}
                    phone={selectedShop.shopPhone}
                    tags={selectedShop.tags}
                    hasBtn={false}
                    shopImg={selectedShop.shopImage}
                  />
                  <Button
                    height="36px"
                    borderRadius="8px"
                    bg={theme.palette.Black}
                    fontColor={theme.palette.White}
                    padding="12px"
                    onClick={() => {
                      openRequestSheet();
                      closeShopInfoSheet();
                    }}
                  >
                    <Send width={18} height={17} color={theme.palette.White} />
                    <Text margin="0 0 0 10px">입찰 넣기</Text>
                  </Button>
                </Flex>
              </BottomSheet>
            )}
            <BottomSheet {...requestSheetProps}>
              <SendRequestQBox closeBottomSheet={closeRequestSheet} />
            </BottomSheet>
          </>
        )}
      </RelativeMobile>
    );
  },
);

MapInfo.displayName = 'MapInfo';

const MapWrapper = styled(Flex)`
  height: calc(100vh - 92px);
`;

const LocationBtn = styled(Flex)`
  position: absolute;
  height: fit-content;
  max-width: 375px;
  bottom: 120px;
  z-index: 2;
`;

import React, { useRef } from 'react';

import { AlertStar, Button, Flex, Text, theme } from '@duri-fe/ui';
import { ShopOnboardingInfoType } from '@duri-fe/utils';

import {
  ButtonWrapper,
  ContactContainer,
  UnderlinedText,
} from './onboarding.styles';
import SalonMap from './SalonMap';

interface SalonConfirmProps {
  salonFormData: ShopOnboardingInfoType;
  onNext: () => void;
}

const SalonConfirm = ({ salonFormData, onNext }: SalonConfirmProps) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Flex direction="column" align="flex-start" padding="48px 0 96px 0">
        <Flex
          direction="column"
          align="flex-start"
          gap={24}
          padding="0 0 48px 0"
        >
          <Flex direction="column" align="flex-start">
            <Text typo="Heading">입력하신 정보를</Text>
            <Text typo="Heading">확인해주세요</Text>
          </Flex>
          <Text typo="Body3" colorCode={theme.palette.Gray500}>
            등록된 정보는 변경이 불가능해요. 신중히 작성해주세요!
          </Text>
        </Flex>

        <Flex direction="column" align="flex-start" gap={28}>
          <Flex justify="flex-start" gap={36}>
            <Text typo="Label1">
              매장 이름
              <AlertStar isUpper />
            </Text>
            <Text typo="Body4">{salonFormData.name}</Text>
          </Flex>

          <Flex justify="flex-start" align="flex-start" gap={36}>
            <Text typo="Label1">
              매장 위치
              <AlertStar isUpper />
            </Text>
            <Flex widthPer={70} justify="flex-start">
              <Text typo="Body4">{salonFormData.address}</Text>
            </Flex>
          </Flex>

          <Flex justify="flex-start" align="flex-start" gap={36}>
            <Text typo="Label1">
              매장 전화번호
              <AlertStar isUpper />
            </Text>
            <Text typo="Body4">{salonFormData.phone}</Text>
          </Flex>

          <Flex justify="flex-start" gap={36}>
            <Text typo="Label1">
              사업자 등록번호
              <AlertStar isUpper />
            </Text>
            <Text typo="Body4">{salonFormData.businessRegistrationNumber}</Text>
          </Flex>

          <Flex justify="flex-start" gap={36}>
            <Text typo="Label1">
              미용사 면허번호
              <AlertStar isUpper />
            </Text>
            <Text typo="Body4">{salonFormData.groomerLicenseNumber}</Text>
          </Flex>
        </Flex>

        {/* 매장 위치 네이버 지도로부터 가져오기 */}
        <Flex
          height={115}
          backgroundColor={theme.palette.Gray50}
          borderRadius={8}
          margin="60px 0 0 0"
        >
          <SalonMap
            ref={mapRef}
            coordinates={{ lat: salonFormData.lat, lon: salonFormData.lon }}
          />
        </Flex>
      </Flex>

      <ContactContainer gap={4}>
        <Text typo="Label2" colorCode={theme.palette.Gray300}>
          문제가 발생한다면
        </Text>
        <UnderlinedText href="mailto:fodo9898@inha.edu">
          문의하기
        </UnderlinedText>
        <Text typo="Label2" colorCode={theme.palette.Gray300}>
          버튼을 눌러주세요.
        </Text>
      </ContactContainer>

      <ButtonWrapper>
        <Button
          onClick={onNext}
          bg={theme.palette.Black}
          fontColor={theme.palette.White}
        >
          다음
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default SalonConfirm;

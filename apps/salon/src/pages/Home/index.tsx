import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { useNavigate } from 'react-router-dom';

import {
  Button,
  Card,
  Flex,
  HeightFitFlex,
  MainHeader,
  MobileLayout,
  NextArrow,
  Pencil,
  SalonNavbar,
  SkeletonCard,
  Text,
  theme,
  Toast,
  WidthFitFlex,
} from '@duri-fe/ui';
import {
  useBottomSheet,
  useGetClosetGrooming,
  useGetDailySchedule,
  useGetHomeQuotationRequest,
  useGetHomeShopInfo,
  usePutGroomingComplete,
  usePutGroomingNoshow,
} from '@duri-fe/utils';
import styled from '@emotion/styled';
import { RadioButton } from '@salon/components/home/RadioButton';

import ClosetGrooming from '@components/home/ClosetGrooming';
import DailyScheduleItem from '@components/home/DailyScheduleItem';
import NewRequestItem from '@components/home/NewRequestItem';

import 'react-spring-bottom-sheet/dist/style.css';

const completeToggleData = ['노쇼했어요.', '네, 완료했어요!'];

const Home = () => {
  const date = new Date();
  const dateStr = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
  const naviagte = useNavigate();

  const { openSheet, bottomSheetProps } = useBottomSheet({
    maxHeight: 300,
  });

  const [completeToggle, setCompleteToggle] = useState<number | null>(null);

  const { data: shopInfoData } = useGetHomeShopInfo({});
  const { data: closetGroomingData, isPending: closetGroomingPending } =
    useGetClosetGrooming();
  const { data: dailyScheduleData, isPending: dailySchedulePending } =
    useGetDailySchedule();
  const { data: quotationRequestData, isPending: quotationRequestPending } =
    useGetHomeQuotationRequest();
  const { mutateAsync: putGroomingComplete } = usePutGroomingComplete();
  const { mutateAsync: putGroomingNoshow } = usePutGroomingNoshow();

  const handleCompleteGrooming = () => {
    if (completeToggle === 1 && closetGroomingData) {
      putGroomingComplete(closetGroomingData.quotationId);
      naviagte('/feedback', {
        state: { quotationId: closetGroomingData.quotationId },
      });
    } else if (completeToggle === 0 && closetGroomingData) {
      putGroomingNoshow(closetGroomingData.quotationId);
    } else {
      return;
    }
  };

  return (
    <MobileLayout>
      <HomeHeaderContainer
        direction="column"
        height={260}
        align="start"
        justify="space-between"
      >
        {shopInfoData ? (
          <>
            <HomeImageWrapper>
              {shopInfoData.imageURL ? (
                <img width="100%" src={shopInfoData.imageURL} />
              ) : (
                <img width="100%" src={shopInfoData.imageURL} />
              )}
            </HomeImageWrapper>
            <MainHeader
              logoColor={theme.palette.Black}
              iconColor={theme.palette.Normal800}
              badge
            />

            {/** 매장 정보 */}
            <TextContainer
              direction="column"
              align="start"
              padding="36px 20px"
              gap={4}
            >
              <Flex gap={12}>
                <Text typo="Title4" colorCode={theme.palette.White}>
                  {shopInfoData.name}
                </Text>
                <ShopInfoEditButton onClick={() => naviagte('my')}>
                  <Pencil width={20} />
                </ShopInfoEditButton>
              </Flex>
              <Text typo="Body3" colorCode={theme.palette.White}>
                {shopInfoData.address}
              </Text>
            </TextContainer>

            <ShopNotice
              justify="start"
              padding="16px"
              backgroundColor={theme.palette.Normal200}
            >
              <ShopNoticeText colorCode={theme.palette.Normal900} align="start">
                {shopInfoData.name} 점주님, 오늘도 좋은 하루 되세요!
              </ShopNoticeText>
            </ShopNotice>
          </>
        ) : (
          <MainHeader
            logoColor={theme.palette.Black}
            iconColor={theme.palette.Normal800}
            badge
          />
        )}
      </HomeHeaderContainer>

      {/** 진행중인 시술 */}
      <Flex padding="0 20px" margin="45px 0 0 0">
        <Card height="195" borderRadius={16} shadow="large">
          {closetGroomingData ? (
            closetGroomingData.isNow === null ? (
              <TitleText colorCode={theme.palette.Normal800}>
                예정된 시술이 없어요.
              </TitleText>
            ) : (
              <ClosetGrooming
                petName={closetGroomingData.petName}
                breed={closetGroomingData.breed}
                gender={closetGroomingData.gender}
                age={closetGroomingData.age}
                weight={closetGroomingData.weight}
                memo={closetGroomingData.memo}
                userPhone={closetGroomingData.userPhone}
                quotationId={closetGroomingData.quotationId}
                startTime={closetGroomingData.startTime}
                isNow={closetGroomingData.isNow}
                handleOpenCompleteSheet={openSheet}
              />
            )
          ) : closetGroomingPending ? (
            <SkeletonCard borderRadius={16} />
          ) : (
            <TitleText colorCode={theme.palette.Normal800}>
              예정된 시술이 없어요.
            </TitleText>
          )}
        </Card>
      </Flex>

      {/** 오늘 스케줄 */}
      <Flex
        direction="column"
        align="flex-start"
        padding="0 20px"
        margin="31px 0 0 0"
        gap={32}
      >
        <Flex direction="column" align="flex-start" gap={6}>
          <Text typo="Caption1">{dateStr}</Text>
          <Text typo="Title1">오늘 일정 빠르게 보기</Text>
        </Flex>
        <Card maxHeight="240px" borderRadius={8} shadow="large">
          {dailyScheduleData && dailyScheduleData.length > 0 ? (
            <ScheduleWrapper
              direction="column"
              align="flex-start"
              justify="flex-start"
              padding="20px 14px"
            >
              <ScheduleContainer
                direction="column"
                align="flex-start"
                justify="flex-start"
              >
                <SideBar
                  margin="0 10px 0 3px"
                  width={1}
                  backgroundColor={theme.palette.Gray200}
                />
                {dailyScheduleData.map((schedule, index) => (
                  <DailyScheduleItem
                    key={index}
                    startTime={schedule.startTime}
                    petName={schedule.petName}
                    breed={schedule.breed}
                    gender={schedule.gender}
                    weight={schedule.weight}
                    groomerName={schedule.groomerName}
                  />
                ))}
              </ScheduleContainer>
            </ScheduleWrapper>
          ) : dailySchedulePending ? (
            <SkeletonCard borderRadius={8} height={55} />
          ) : (
            <Flex padding="20px 0">
              <TitleText colorCode={theme.palette.Normal800}>
                오늘 스케줄이 없어요.
              </TitleText>
            </Flex>
          )}
        </Card>
      </Flex>

      {/** 요청서 확인 */}
      <NewRequestWrapper
        direction="column"
        align="flex-start"
        margin="28px 0 120px 0"
      >
        <Flex justify="flex-start" gap={16} margin="0 20px 16px 20px">
          <Text typo="Title1">요청서 확인하기</Text>
          <WidthFitFlex>
            <Text typo="Caption1" colorCode={theme.palette.Gray300}>
              더보기
            </Text>
            <NextArrow width={20} color={theme.palette.Gray300} />
          </WidthFitFlex>
        </Flex>
        {quotationRequestData && quotationRequestData.length > 0 ? (
          <NewRequestItemWrapper justify="flex-start" padding="0 20px" gap={8}>
            {quotationRequestData.map((request, index) => (
              <NewRequestItem
                key={index}
                requestId={request.requestId}
                petId={request.petId}
                imageURL={request.imageURL}
                name={request.name}
                breed={request.breed}
                gender={request.gender}
                age={request.age}
                weight={request.weight}
                neutering={request.neutering}
                quotationReqId={request.quotationReqId}
                memo={request.memo}
              />
            ))}
          </NewRequestItemWrapper>
        ) : quotationRequestPending ? (
          <Flex padding="0 20px" height={281}>
            <SkeletonCard borderRadius={8} height={281} />
          </Flex>
        ) : (
          <Flex padding="0 20px" height={281}>
            <Flex backgroundColor={theme.palette.Gray20} borderRadius={8}>
              <TitleText colorCode={theme.palette.Normal800}>
                도착한 요청서가 없어요.
              </TitleText>
            </Flex>
          </Flex>
        )}
      </NewRequestWrapper>

      <SalonNavbar />

      <BottomSheet {...bottomSheetProps}>
        <Flex
          direction="column"
          align="flex-start"
          justify="space-between"
          padding="24px 36px 0 36px"
          backgroundColor={theme.palette.White}
        >
          <Text typo="Title1" colorCode={theme.palette.Black}>
            미용이 완료되었나요?
          </Text>
          <Flex direction="column" gap={8} padding="24px 0 40px 0">
            {completeToggleData.map((text, index) => (
              <RadioButton
                key={index}
                selected={completeToggle === index}
                label={text}
                onClick={() => setCompleteToggle(index)}
              />
            ))}
          </Flex>
          <HeightFitFlex gap={8}>
            <Button
              width="120px"
              height="47px"
              bg={theme.palette.Gray20}
              borderRadius="8px"
              onClick={bottomSheetProps.onDismiss}
            >
              <Text typo="Body3">나중에 쓰기</Text>
            </Button>
            <CompleteButton
              height="47px"
              bg={
                completeToggle === null
                  ? theme.palette.Gray100
                  : theme.palette.Black
              }
              fontColor={theme.palette.White}
              borderRadius="8px"
              onClick={
                completeToggle === null
                  ? bottomSheetProps.onDismiss
                  : handleCompleteGrooming
              }
            >
              {completeToggle ? '일지 쓰기' : '닫기'}
            </CompleteButton>
          </HeightFitFlex>
        </Flex>
      </BottomSheet>
      <Toast />
    </MobileLayout>
  );
};

const HomeHeaderContainer = styled(Flex)`
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70%;
    background: linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #111 100%);
  }
`;

const HomeImageWrapper = styled(HeightFitFlex)`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  z-index: -1;
`;

const TextContainer = styled(Flex)`
  height: fit-content;
  width: fit-content;
  z-index: 2;
`;

const ShopInfoEditButton = styled.button`
  height: 20px;
`;

const ShopNotice = styled(HeightFitFlex)`
  width: calc(100% - 40px);
  border-radius: 0 12px 12px 12px;
  position: absolute;
  bottom: -25px;
  left: 20px;
  overflow: hidden;
`;

const ShopNoticeText = styled(Text)`
  width: 100%;
  justify-content: start;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const TitleText = styled(Text)`
  font-weight: 500;
  font-size: 15px;
`;

const ScheduleWrapper = styled(Flex)`
  overflow-y: hidden;
`;

const ScheduleContainer = styled(Flex)`
  overflow-y: scroll;
  position: relative;
`;

const SideBar = styled(Flex)`
  position: absolute;
`;

const NewRequestWrapper = styled(Flex)`
  overflow: hidden;
`;

const NewRequestItemWrapper = styled(Flex)`
  overflow-x: scroll;
`;

const CompleteButton = styled(Button)`
  flex-shrink: 1;
`;

export default Home;
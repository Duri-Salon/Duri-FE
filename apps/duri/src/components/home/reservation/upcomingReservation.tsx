import { UpcomingReservationProps } from '@duri/assets/types/reservation';
import { Button, Flex, Image, Text, theme, WidthFitFlex } from '@duri-fe/ui';
import styled from '@emotion/styled';
import { differenceInDays, format } from 'date-fns';
import { ko } from 'date-fns/locale';

const UpcomingReservation = (upcomingReservation: UpcomingReservationProps) => {
  const currentDate = new Date();
  const reservationDate = new Date(upcomingReservation.reservationDate);
  let daysDifference;
  if (reservationDate)
    daysDifference = differenceInDays(
      currentDate,
      upcomingReservation.reservationDate,
    ); // 일수 차이 계산

  return (
    <Wrapper
      direction="column"
      borderRadius={12}
      padding="27px 0"
      backgroundColor={theme.palette.White}
    >
      <Flex gap={14} padding="0 20px">
        <Image
          src={upcomingReservation.salonImage}
          width={67}
          height={67}
          borderRadius={13}
        />
        <Flex direction="column" align="flex-start" gap={12}>
          <Text>{upcomingReservation.salonName}</Text>
          <Text typo="Caption4" colorCode={theme.palette.Gray400}>
            {upcomingReservation.salonAddress}
          </Text>
        </Flex>
        <WidthFitFlex align="flex-start">
          <Button width="45px" height="25px" typo="Label2" fontColor={theme.palette.Normal800}>
            D{daysDifference}
          </Button>
        </WidthFitFlex>
      </Flex>
      <Flex gap={8} justify="flex-end" padding='0 13px'>
        <Button
          width="97px"
          height="25px"
          borderRadius="4px"
          padding="6px 26px"
          bg={theme.palette.Gray20}
          fontColor={theme.palette.Gray500}
          typo="Caption2"
        >
          전화하기
        </Button>
        <Button
          width="97px"
          height="25px"
          borderRadius="4px"
          padding="6px 26px"
          bg={theme.palette.Gray20}
          fontColor={theme.palette.Gray500}
          typo="Caption2"
        >
          문의하기
        </Button>
      </Flex>

      <BottomWrapper justify='space-between' height={33} backgroundColor={theme.palette.Normal100} margin='12px 0 0 0' padding='12px 27px'>
        <Text typo='Label2' colorCode={theme.palette.Normal800}>
          {format(upcomingReservation.reservationDate, 'yyyy.MM.dd a h시', {
            locale: ko,
          })}
        </Text>
        <Text typo='Label2' colorCode={theme.palette.Normal800}>
          {upcomingReservation.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원
        </Text>
      </BottomWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  flex-shrink: 0;
  position: relative;
`;

const BottomWrapper = styled(Flex)`
    position: absolute;
    bottom: 0;
    border-radius: 0 0 12px 12px;
`

export default UpcomingReservation;
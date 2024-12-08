import { useState } from 'react';

import {
  Flex,
  HeightFitFlex,
  PetInfo,
  Seperator,
  Text,
  WidthFitFlex,
} from '@duri-fe/ui';
import { defaultRequestQuotationData, defaultTimeData } from '@duri-fe/ui';
import { format } from 'date-fns';

import { RequestType, TimeType } from '../../types';

import { DetailGrooming } from './DetailGrooming';
import { TimeTable } from './Timetable';

interface RequestQuotationProps extends RequestType {
  userName: string;
  userPhone: string;
}

const timeList = Array(10)
  .fill(0)
  .map((_, i) => `${9 + i}:00`);

export const RequestQuotation = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [requestList] = useState<RequestQuotationProps>(
    defaultRequestQuotationData,
  );

  const [selectedTimeList] = useState<TimeType>(defaultTimeData);
  const { groomingMenu, additionalGrooming, specialCare, designCut } =
    requestList.quotationDetails;
  return (
    <>
      <Flex
        direction="column"
        justify="flex-start"
        padding="19px 5px"
        margin="0 0 14px 0"
      >
        {requestList.pet && (
          <PetInfo
            gender={requestList.pet.gender}
            name={requestList.pet.name}
            age={requestList.pet.age}
            breed={requestList.pet.breed}
            image={requestList.pet.image}
            weight={requestList.pet.weight}
            themeVariant='spacious'
          />
        )}
      </Flex>
      <HeightFitFlex direction="column" gap={18}>
        <Seperator mode="dotted" height="2px" />
        <Flex justify="space-between" padding="0 30.5px">
          <Text typo="Body2">보호자</Text>
          <WidthFitFlex gap={16}>
            <Text typo="Caption5">{requestList.userName}</Text>
            <Text typo="Caption5">{requestList.userPhone}</Text>
          </WidthFitFlex>
        </Flex>
        {requestList.quotationDetails.day && (
          <>
            <Seperator mode="dotted" height="2px" />
            <Flex justify="space-between" padding="0 30.5px">
              <Text typo="Body2">희망 예약 날짜</Text>
              <Text typo="Body2">
                {format(requestList.quotationDetails.day, 'yyyy.MM.dd')}
              </Text>
            </Flex>
          </>
        )}
        <Seperator mode="dotted" height="2px" />
        <Flex direction="column">
          <Text typo="Body2">희망 예약 시간</Text>
          <TimeTable timeList={timeList} selectedTimeList={selectedTimeList} />
        </Flex>
      </HeightFitFlex>
      <Seperator mode="dotted" height="2px" />
      <HeightFitFlex direction="column" gap={28}>
        <DetailGrooming
          groomingMenu={groomingMenu}
          additionalGrooming={additionalGrooming}
          specialCare={specialCare}
          designCut={designCut}
        />
      </HeightFitFlex>
      <Seperator mode="dotted" height="2px" />
        <Flex direction="column" align="flex-start" padding="0 35.5px" gap={24}>
          <Text typo="Body2">요청사항</Text>
          {/* <TextField value={memo} width={266} multiline={true}/> */}
        </Flex>
      <Flex gap={7} margin="6px 0" padding="16px 18.5px">
        {children}
      </Flex>
    </>
  );
};

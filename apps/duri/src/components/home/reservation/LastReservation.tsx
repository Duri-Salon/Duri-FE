import React from 'react';

import { Flex, StatusBar, theme, WidthFitFlex } from '@duri-fe/ui';
import styled from '@emotion/styled';

const LastReservation = ({ daysDifference }: { daysDifference: number }) => {
  const total = 4; // 단계 수
  const stepLength = 30 / total; // 30일 기준
  const current = Math.min(Math.ceil(daysDifference / stepLength), total); // 현재 단계 계산


  return (
    <Wrapper
      direction="column"
      borderRadius={12}
      padding="27px 20px"
      backgroundColor={theme.palette.White}
      justify="flex-start"
      align="flex-start"
    >
      <Label
        width="110px"
        height="26px"
        backgroundColor={theme.palette.Normal500}
      >
        미용한지 {daysDifference}일째
      </Label>
      <Flex>
        <StatusBar current={current} total={4} mode="main" />
      </Flex>
    </Wrapper>
  );
};

export default LastReservation;

const Wrapper = styled(Flex)`
  flex-shrink: 0;
`;

const Label = styled(WidthFitFlex)`
  padding: 9px 10px;
  color: ${theme.palette.Normal800};
  border-radius: 99px;
  font-size: ${theme.typo.Label3};
`;

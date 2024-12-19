import { Button, Flex, Text, theme, WidthFitFlex } from '@duri-fe/ui';
import styled from '@emotion/styled';

const FRIENDLY = ['베스트 프렌드', '라뽀가 많이 형성됐어요', '어색한 반응'];
const REACTION = [
  '다소 공격적이에요',
  '미용도구를 피해요',
  '별다른 반응이 없어요',
];
const BEHAVIOR = [
  '피하려는 행동이 있어요',
  '왕왕!내가 제일 용맹하개',
  '별다른 반응이 없어요',
];

const PetBehaviorContainer = () => {
  return (
    <>
      <Flex direction="column" padding="0 20px 24px" align="flex-start" gap={8}>
        <Text typo="Title2">반려견 행동 선택</Text>
        <Text typo="Label3" colorCode={theme.palette.Gray400}>
          미용받으면서 반려견의 행동을 선택해주세요.
        </Text>
      </Flex>

      <Flex direction="column" align="flex-start" gap={16}>
        <Flex direction="column" align="flex-start" gap={12}>
          <WidthFitFlex padding="0 20px">
            <Text typo="Body3">🥰 미용사와의 친화력</Text>
          </WidthFitFlex>
          <ToggleWrapper gap={8} padding="0 20px" justify="flex-start">
            {FRIENDLY.map((item, index) => (
              <Button
                key={index}
                typo="Label3"
                width="fit-content"
                height="43px"
                bg={theme.palette.White}
                fontColor={theme.palette.Black}
                border={`1px solid ${theme.palette.Gray100}`}
              >
                {item}
              </Button>
            ))}
          </ToggleWrapper>
        </Flex>

        <Flex direction="column" align="flex-start" gap={12}>
          <WidthFitFlex padding="0 20px">
            <Text typo="Body3">✂️ 미용도구 반응</Text>
          </WidthFitFlex>
          <ToggleWrapper gap={8} padding="0 20px" justify="flex-start">
            {REACTION.map((item, index) => (
              <Button
                key={index}
                typo="Label3"
                width="fit-content"
                height="43px"
                bg={theme.palette.White}
                fontColor={theme.palette.Black}
                border={`1px solid ${theme.palette.Gray100}`}
              >
                {item}
              </Button>
            ))}
          </ToggleWrapper>
        </Flex>

        <Flex direction="column" align="flex-start" gap={12}>
          <WidthFitFlex padding="0 20px">
            <Text typo="Body3">🐶 행동 밎 짖음</Text>
          </WidthFitFlex>
          <ToggleWrapper gap={8} padding="0 20px" justify="flex-start">
            {BEHAVIOR.map((item, index) => (
              <Button
                key={index}
                typo="Label3"
                width="fit-content"
                height="43px"
                bg={theme.palette.White}
                fontColor={theme.palette.Black}
                border={`1px solid ${theme.palette.Gray100}`}
              >
                {item}
              </Button>
            ))}
          </ToggleWrapper>
        </Flex>
      </Flex>
    </>
  );
};

const ToggleWrapper = styled(Flex)`
  overflow-x: scroll;
`;

export default PetBehaviorContainer;

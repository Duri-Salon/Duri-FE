import {
  Flex,
  MobileLayout,
  NaverLogo,
  SpeechBallonContainer,
  Text,
  theme,
} from '@duri-fe/ui';
import { duriNaverLoginRedirect } from '@duri-fe/utils';

import * as S from './Login.style';

const LoginPage = () => {
  // handle[target][event]
  // handle[event][target]
  const handleNaverLoginButtonClick = () => {
    duriNaverLoginRedirect();
  };

  return (
    <MobileLayout>
      <S.Container direction="column">
        {/** 로고 */}
        <S.Logo src="/images/logo.png" />
        <Flex direction="column" margin="24px 0 0 0">
          <Text typo="Heading">두리묭실로</Text>
          <Text typo="Heading">쉽고 빠르게 예약해요!</Text>
          <Text
            typo="Body3"
            colorCode={theme.palette.Gray300}
            margin="8px 0 0 0"
          >
            최저가 예약부터 근처 미용샵까지
          </Text>
        </Flex>

        {/** 로그인 버튼 */}
        <Flex direction="column" margin="120px 0 0 0">
          <SpeechBallonContainer
            label="3초만에 시작하기 🚀"
            textColor={theme.palette.Gray400}
          />
          <S.LoginButton onClick={handleNaverLoginButtonClick}>
            <NaverLogo />
          </S.LoginButton>
        </Flex>

        {/** 문의하기 */}
        <S.Contact>
          <Text typo="Body3" colorCode={theme.palette.Gray300}>
            문의하기
          </Text>
        </S.Contact>
      </S.Container>
    </MobileLayout>
  );
};

export default LoginPage;

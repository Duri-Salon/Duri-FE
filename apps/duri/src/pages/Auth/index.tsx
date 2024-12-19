import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import {
  DuriDog,
  Flex,
  MobileLayout,
  NaverLogo,
  SpeechBalloonContainer,
  Text,
  theme,
} from '@duri-fe/ui';
import { useDuriNaverLogin } from '@duri-fe/utils';
import styled from '@emotion/styled';

const AuthPage = () => {
  const navigate = useNavigate();
  const [query] = useSearchParams();
  const providerId = query.get('providerId') || '';

  const { data, error, isSuccess } = useDuriNaverLogin(providerId);

  useEffect(() => {
    if (error) {
      window.alert('로그인에 실패했습니다.');
    } else if (isSuccess && data) {
      localStorage.setItem(`${data.client}`, data.token);
      if (data.newUser) {
        navigate('/onboarding');
      } else {
        navigate('/');
      }
    }
  }, [data, error]);

  return (
    <MobileLayout>
      <Container direction="column">
        {/** 로고 */}
        <DuriDog width={169} height={143} />
        <Flex direction="column">
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
          <SpeechBalloonContainer
            label="3초만에 시작하기 🚀"
            textColor={theme.palette.Gray400}
          />
          <LoginButton>
            <NaverLogo />
          </LoginButton>
        </Flex>

        {/** 문의하기 */}
        <Contact>
          <Text typo="Body3" colorCode={theme.palette.Gray300}>
            문의하기
          </Text>
        </Contact>
      </Container>
    </MobileLayout>
  );
};

const Container = styled(Flex)`
  flex-grow: 1;
  position: relative;
`;

const LoginButton = styled.button`
  width: 60px;
  height: 60px;
  margin-top: 20px;
`;

const Contact = styled(Flex)`
  position: absolute;
  bottom: 50px;
  height: fit-content;
`;

export default AuthPage;

import { Flex } from '@duri-fe/ui';
import styled from '@emotion/styled';

export const Container = styled(Flex)`
  flex-grow: 1;
  position: relative;
`;

export const Logo = styled.img``;

export const LoginButton = styled.button`
  width: 60px;
  height: 60px;
  margin-top: 20px;
`;

export const Contact = styled(Flex)`
  position: absolute;
  bottom: 50px;
  height: fit-content;
`;

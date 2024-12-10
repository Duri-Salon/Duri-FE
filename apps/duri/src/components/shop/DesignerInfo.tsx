import { useNavigate } from 'react-router-dom';

import { Approve, Flex, Text, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

interface DesignerInfoProps {
  version?: 'vertical' | 'horizontal';
  designerId: number | string;
  name: string;
  age: number;
  gender: string;
  experience: number;
  roles: string[];
  imageUrl: string;
  padding?: string;
}

export const DesignerInfo = ({
  version = 'vertical',
  designerId,
  name,
  age,
  gender,
  experience,
  roles,
  imageUrl,
  padding,
}: DesignerInfoProps) => {
  const navigate = useNavigate();

  const moveToPortfolio = () => {
    if (version === 'vertical') {
      navigate(`/portfolio/${designerId}`);
    }
  };

  return (
    <Container
      version={version}
      onClick={moveToPortfolio}
      clickable={version === 'vertical'}
      direction={version === 'horizontal' ? 'row' : 'column'}
      align={version === 'horizontal' ? 'center' : 'flex-start'}
      gap={version === 'horizontal' ? 16 : 8}
      padding={padding}
    >
      <ImageWrapper version={version}>
        <DesignerImg
          version={version}
          src={imageUrl}
          alt={`${name}'s profile`}
        />
      </ImageWrapper>

      <Flex direction="column" align="flex-start" justify="flex-start" gap={8}>
        <Text typo="Title3">{name}</Text>

        <Text
          typo="Caption4"
          colorCode={theme.palette.Gray400}
        >{`경력 ${experience}년, ${age}세, ${gender}`}</Text>

        <Flex direction="column" gap={8}>
          {roles.map((item, idx) => (
            <Role key={idx}>
              <Text typo="Caption3" colorCode={theme.palette.Link}>
                {item}
              </Text>
              <Approve width={11} height={10} />
            </Role>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

const Container = styled(Flex)<{
  version: 'vertical' | 'horizontal';
  clickable: boolean;
}>`
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
`;

const DesignerImg = styled.img<{ version: 'vertical' | 'horizontal' }>`
  width: ${({ version }) => (version === 'horizontal' ? '124px' : '160px')};
  height: ${({ version }) => (version === 'horizontal' ? '124px' : '160px')};
  border-radius: ${({ version }) =>
    version === 'horizontal' ? '99px' : '8px'};
  object-fit: cover;
`;

const ImageWrapper = styled.div<{ version: 'vertical' | 'horizontal' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

// 역할 태그 스타일
const Role = styled(Flex)`
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

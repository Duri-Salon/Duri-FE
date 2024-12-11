import { useNavigate } from 'react-router-dom';

import {
  Button,
  Flex,
  HardText,
  HeightFitFlex,
  ProfileImage,
  SalonTag,
  Send,
  Star,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

interface ShopLineProps {
  id: number;
  title: string;
  score: number;
  shopImg: string;
  reviewNum: number;
  distance: number;
  address: string;
  phone: string;
  isClicked?: boolean;
  onClick?: () => void;
  tags: string[];
  hasBtn?: boolean;
  isCompact?: boolean;
}

export const ShopLine = ({
  id,
  title,
  score,
  reviewNum,
  shopImg,
  distance,
  address,
  phone,
  isClicked = false,
  onClick,
  tags,
  hasBtn = true,
  isCompact = false,
}: ShopLineProps) => {
  const navigate = useNavigate();
  const moveToDetail = (shopId: number | string) => {
    navigate(`/shop/${shopId}`);
  };

  const handleSendClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // 이벤트 전파 차단
    onClick?.();
  };

  return (
    <HeightFitFlex gap={20} key={id} onClick={() => moveToDetail(id)}>
      <ProfileImage height={92} width={92} src={shopImg} borderRadius={8} />
      <Flex direction="column" align="flex-start" gap={8}>
        <Flex gap={17} justify="flex-start">
          <Text typo="Body2">{title}</Text>
          <WidthFitFlex gap={7}>
            <Star width={14} />
            <Text typo="Label3">
              {score} ({reviewNum})
            </Text>
          </WidthFitFlex>
        </Flex>

        <TextLine typo="Caption3" colorCode={theme.palette.Gray400}>
          <MarkText>{`${distance}m | `}</MarkText>
          {address}
        </TextLine>
        <Flex>
          <Flex direction="column" gap={8}>
            {isCompact ? null : (
              <Flex gap={6} justify="flex-start">
                <Button
                  width="53px"
                  height="22px"
                  padding="6.5px 9.5px"
                  borderRadius="2px"
                  bg={theme.palette.White}
                  border={`0.8px solid ${theme.palette.Gray100}`}
                  disabled={true}
                >
                  <HardText typo="Caption2" colorCode={theme.palette.Gray500}>
                    영업중
                  </HardText>
                </Button>
                <Text typo="Caption2" colorCode={theme.palette.Link}>
                  {phone}
                </Text>
              </Flex>
            )}
            <TagList gap={8} justify="flex-start">
              {tags.map((tag, idx) => (
                <SalonTag key={idx} content={tag} />
              ))}
            </TagList>
          </Flex>
          {hasBtn && (
            <Button
              width="42px"
              height="42px"
              borderRadius="40px"
              onClick={handleSendClick}
              bg={isClicked ? theme.palette.Normal600 : theme.palette.Normal100}
              padding="0"
            >
              <Send width={21} height={21} color={theme.palette.Normal800} />
            </Button>
          )}
        </Flex>
      </Flex>
    </HeightFitFlex>
  );
};

const MarkText = styled.span`
  font-weight: 600;
`;

const TextLine = styled(Text)`
  display: inline;
`;

const TagList = styled(Flex)`
  flex-wrap: wrap;
`;

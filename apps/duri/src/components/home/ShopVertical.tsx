import { useNavigate } from 'react-router-dom';

import { RecommendeShopProps } from '@duri/assets/types/shop';
import { Button, HeightFitFlex, Image, Text, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

export const ShopVertical = ({
  shopList,
}: {
  shopList: RecommendeShopProps[];
}) => {
  const navigate = useNavigate();
  const handleClickShop = (shopIdx: string) => navigate(`/shop/${shopIdx}`);

  return (
    <HeightFitFlex justify="flex-start" gap={6}>
      {shopList &&
        shopList.map((shop: RecommendeShopProps) => (
          <Wrapper
            key={shop.salonIdx}
            direction="column"
            align="flex-start"
            gap={6}
            width={152}
            height={184}
            padding="3px 3px 13px 3px"
            onClick={() => handleClickShop(shop.salonIdx)}
          >
            <Image
              width={146}
              height={81}
              borderRadius={8}
              src={shop.salonImage}
            />
            <HeightFitFlex direction='column' align='flex-start'>
              <Text typo="Title3" margin='13px 0 11px 6px'>{shop.salonName}</Text>
              <Text typo="Caption4" colorCode={theme.palette.Gray500} margin='0 0 12px 6px'>
                {shop.salonAddress}
              </Text>
              <HeightFitFlex justify="flex-start" gap={3} margin='0 0 0 6px'>
                {shop.salonTag?.map((tag: string) => (
                  <Tag
                    key={tag}
                    typo="Caption2"
                    bg={theme.palette.Gray50}
                    fontColor={theme.palette.Gray500}
                    width="fit-content"
                    height="19px"
                    borderRadius="2px"
                  >
                    {tag}
                  </Tag>
                ))}
              </HeightFitFlex>
            </HeightFitFlex>
          </Wrapper>
        ))}
    </HeightFitFlex>
  );
};

const Tag = styled(Button)`
  padding: 10px;
`;
const Wrapper = styled(HeightFitFlex)`
  border-radius: 12px;
  background: var(--bw-white, #fff);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

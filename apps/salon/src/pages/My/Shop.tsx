import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Flex, Header, MobileLayout, SalonNavbar } from '@duri-fe/ui';
import { UseGetMyShopInfo } from '@duri-fe/utils';
import styled from '@emotion/styled';
import DesignerInfoArea from '@salon/components/my/shop/DesignerInfoArea';
import ShopImageArea from '@salon/components/my/shop/ShopImageArea';
import ShopInfoArea from '@salon/components/my/shop/ShopInfoArea';

const MyShopPage = () => {
  const navigate = useNavigate();

  const [onShopImageEdit, setOnShopImageEdit] = useState(false);
  const [onShopInfoEdit, setOnShopInfoEdit] = useState(false);
  const [onDesignerInfoEdit, setOnDesignerInfoEdit] = useState(false);

  const { data: myShopInfo } = UseGetMyShopInfo({});

  const {
    groomerProfileDetailResponse: groomerDetail = {
      id: 0,
      email: '',
      phone: '',
      name: '',
      gender: '',
      age: 0,
      history: 0,
      image: '',
      info: '',
      license: [],
    },
    shopProfileDetailResponse: shopDetail = {
      id: 0,
      name: '',
      address: '',
      imageURL: '',
      phone: '',
      openTime: '',
      closeTime: '',
      info: '',
      kakaoTalk: '',
      tags: [],
    },
  } = myShopInfo || {};

  const handleClickBack = () => {
    navigate('/my');
  };

  return (
    <MobileLayout>
      <Header backIcon title="마이샵" onClickBack={handleClickBack} />
      {myShopInfo && (
        <>
          <ShopInfoContainer
            direction="column"
            align="flex-start"
            padding="0 20px 160px 20px"
            key={shopDetail.id}
          >
            <ShopImageArea
              imageURL={shopDetail.imageURL}
              onEdit={onShopImageEdit}
              setOnEdit={setOnShopImageEdit}
            />

            {/**매장 정보 */}
            <ShopInfoArea
              name={shopDetail.name}
              address={shopDetail.address}
              phone={shopDetail.phone}
              openTime={shopDetail.openTime}
              closeTime={shopDetail.closeTime}
              tags={shopDetail.tags}
              info={shopDetail.info}
              kakaoTalk={shopDetail.kakaoTalk}
              onEdit={onShopInfoEdit}
              setOnEdit={setOnShopInfoEdit}
            />

            {/**디자이너 */}
            <DesignerInfoArea
              id={groomerDetail.id}
              name={groomerDetail.name}
              age={groomerDetail.age}
              gender={groomerDetail.gender}
              history={groomerDetail.history}
              license={groomerDetail.license}
              image={groomerDetail.image}
              onEdit={onDesignerInfoEdit}
              setOnEdit={setOnDesignerInfoEdit}
            />

            {/**리뷰 */}
            {/* <HeightFitFlex
              direction="column"
              align="flex-start"
              margin="32px 0 0 0"
              gap={24}
            >
              <WidthFitFlex gap={7}>
                <Text typo="Title3">리뷰</Text>
                <WidthFitFlex>
                  <Text typo="Label3">{shopRating}</Text>
                  <RatingStars score={shopRating} size={14} />
                  <Text typo="Label3">({reviewCnt})</Text>
                </WidthFitFlex>
              </WidthFitFlex>
              {reviewData && reviewData.length > 0 ? (
                reviewData.map((review) => (
                  <ShopReviewBox key={review.reviewId} review={review} />
                ))
              ) : (
                <Flex height={48}>
                  <Text>아직 등록된 리뷰가 없습니다.</Text>
                </Flex>
              )}
            </HeightFitFlex> */}
          </ShopInfoContainer>
        </>
      )}
      <SalonNavbar />
    </MobileLayout>
  );
};

const ShopInfoContainer = styled(Flex)`
  overflow-y: auto;
`;

export default MyShopPage;

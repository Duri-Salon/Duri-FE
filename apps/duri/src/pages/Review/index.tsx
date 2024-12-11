// import { ShopLine } from '@duri/components/shop';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

import { ReviewImageFile } from '@duri/components/review/ReviewImageFile';
import {
  Button,
  DuriNavbar,
  Flex,
  Header,
  MobileLayout,
  // PetInfo,
  RatingStars,
  Text,
  TextField,
  theme,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

export interface ReviewFormData {
  quotationId: number;
  rating: number;
  comment: string;
  image: string;
}

const ReviewWritePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleNavigate = () => navigate(-1);
  //useForm으로 리뷰 작성 폼 만들어줘여댕 ~,~
  // const { control, handleSubmit, setValue, getValues } = useForm<ReviewFormData>({
  const { setValue, getValues } = useForm<ReviewFormData>({
    mode: 'onChange',
    defaultValues: {
      quotationId: location.state,
      rating: 0,
      comment: '',
      image: '',
    },
  });



  return (
    <MobileLayout>
      <Header
        title="후기 작성"
        backIcon={true}
        onClickBack={handleNavigate}
        titleAlign="start"
      />
      <FlexGrow direction="column" justify='flex-start'>
        {/* <ShopLine /> */}
        <Flex direction="column" gap={12} margin="42px 0 12px 0">
          <Text typo="Body2">미용이 만족스러우셨나요?</Text>
          <Text typo="Caption5" colorCode={theme.palette.Gray400}>
            미용에 대한 후기를 남겨주세요👀
          </Text>
        </Flex>
        <Flex margin="0 0 15px 0">
          <RatingStars score={4} size={24} reviewMode={true} />
        </Flex>
        <ReviewImageFile imageURL={getValues('image')} onChange={setValue}/>
        <Flex margin="15px 0">
          <TextField
            multiline={true}
            placeholder="후기를 작성해주세요!"
            placeholderTypo={theme.typo.Caption1}
          />
        </Flex>
        {/* <PetInfo /> */}
      </FlexGrow>
      <Button
        bg={theme.palette.Black}
        fontColor={theme.palette.White}
        borderRadius="0px"
      >
        등록
      </Button>
      <DuriNavbar />
    </MobileLayout>
  );
};

export default ReviewWritePage;

const FlexGrow = styled(Flex)`
  flex: 1;
`;

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PetInfoCard } from '@duri/components/my/PetInfoCard';
import { Status } from '@duri/components/my/Status';
import { UserInfo } from '@duri/components/my/UserInfo';
import {
  Button,
  DuriNavbar,
  Flex,
  Header,
  HeightFitFlex,
  MobileLayout,
  Scissors,
  Store,
  Text,
  theme,
  Write,
} from '@duri-fe/ui';
import { useGetPetListInfo, useGetUserInfo } from '@duri-fe/utils';
import styled from '@emotion/styled';

interface PetInfoType {
  id: number;
  name: string;
  image: string | null;
  breed: string;
  age: number;
  weight: number;
  gender: string;
  neutering?: boolean;
  lastGrooming?: string | null;
  character: string[];
  diseases: string[];
}

const MyPage = () => {
  // const { data: petData, isError: getPetInfoError } = useGetPetInfo();
  const { data: userInfo } = useGetUserInfo();
  const { data: petListData } = useGetPetListInfo();
  const [petInfo, setPetInfo] = useState<PetInfoType>();
  const navigate = useNavigate();
  const handleNavigate = (path: string) => navigate(path);
  const logout = () => {
    localStorage.removeItem('authorization_user');
    navigate('/login');
  };

  const handleClickRegisterButton = () => {
    navigate('/my/pet/register');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (petListData) setPetInfo(petListData[0]);
  }, [petListData]);

  return (
    <MobileLayout backgroundColor={theme.palette.Gray_White}>
      <Header />
      <Flex direction="column" padding="0 18px" margin="0 0 100px 0">
        <>
          {userInfo ? (
            <>
              <UserInfo
                name={userInfo.name}
                phone={userInfo.phone}
                profileImg={userInfo.profileImg}
              />
              <Status
                reservationCnt={userInfo.reservationCount}
                noShowCnt={userInfo.noShowCount}
              />
            </>
          ) : (
            <Flex
              direction="column"
              borderRadius={12}
              padding="25px 22px 27px 13px"
              height={168}
              backgroundColor={theme.palette.White}
              margin="0 0 10px"
            >
              <Text typo="Caption4" colorCode={theme.palette.Gray300}>
                등록된 유저 정보가 없습니다.
              </Text>
            </Flex>
          )}

          {petInfo ? (
            <PetInfoCard
              petId={petInfo.id}
              age={petInfo.age}
              name={petInfo.name}
              breed={petInfo.breed}
              gender={petInfo.gender}
              neutering={
                petInfo.neutering === undefined ? false : petInfo.neutering
              }
              weight={petInfo.weight}
              imageURL={petInfo.image === null ? '' : petInfo.image}
            />
          ) : (
            <HeightFitFlex
              direction="column"
              borderRadius={12}
              padding="25px 22px 27px 13px"
              height={168}
              backgroundColor={theme.palette.White}
              gap={16}
            >
              <Text typo="Label3" colorCode={theme.palette.Gray300}>
                앗! 등록된 반려견이 없어요.
              </Text>
              <Button
                typo="Label4"
                fontColor={theme.palette.White}
                onClick={handleClickRegisterButton}
                bg={theme.palette.Black}
                width="135px"
                padding="10px"
                borderRadius="8px"
              >
                마이펫 등록하러가기
              </Button>
            </HeightFitFlex>
          )}
          <Flex direction="column" margin="8px 0" gap={8}>
            <Flex gap={10}>
              <FlexButton
                padding="13px 35px"
                backgroundColor={theme.palette.White}
                borderRadius={8}
                gap={5}
                onClick={() => handleNavigate('/my/shop')}
              >
                <Store width={28} height={28} />
                <Text typo="Label1">단골가게</Text>
              </FlexButton>
              <FlexButton
                padding="15px 35px"
                backgroundColor={theme.palette.White}
                borderRadius={8}
                gap={5}
                onClick={() => handleNavigate('/my/history')}
              >
                <Scissors width={24} height={24} />
                <Text typo="Label1">이용기록</Text>
              </FlexButton>
            </Flex>
            <FlexButton
              padding="13px 35px"
              backgroundColor={theme.palette.White}
              borderRadius={8}
              gap={10}
              onClick={() => handleNavigate('/my/review')}
            >
              <Write width={18} height={18} />
              <Text typo="Label1">내가 쓴 후기</Text>
            </FlexButton>
          </Flex>
          <FlexButton margin="40px 0 0 0" onClick={logout}>
            <Text typo="Caption2" colorCode={theme.palette.Gray300}>
              로그아웃
            </Text>
          </FlexButton>
        </>
      </Flex>
      <DuriNavbar />
    </MobileLayout>
  );
};

export default MyPage;

const FlexButton = styled(Flex)`
  cursor: pointer;
`;

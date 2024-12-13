import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Flex, MobileLayout, StatusBar } from '@duri-fe/ui';
import {
  GroomerOnboardingInfoType,
  ShopOnboardingInfoType,
} from '@duri-fe/utils';
import styled from '@emotion/styled';
import InputSalon from '@salon/components/onboarding/InputSalon';
import InputSalonOwner from '@salon/components/onboarding/InputSalonOwner';
import SalonConfirm from '@salon/components/onboarding/SalonConfirm';
import SalonOwnerConfirm from '@salon/components/onboarding/SalonOwnerConfirm';

const OnboardingPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);

  const [salonFormData, setSalonFormData] = useState<ShopOnboardingInfoType>({
    name: '',
    address: '',
    lat: 0,
    lon: 0,
    phone: '',
    businessRegistrationNumber: '',
    groomerLicenseNumber: '',
  });

  const [salonOwnerFormData, setSalonOnwerFormData] =
    useState<GroomerOnboardingInfoType>({
      name: '',
      gender: '',
      age: 0,
      history: 0,
      license: [],
    });

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleNextSalon = (data: ShopOnboardingInfoType) => {
    setSalonFormData(data);
    nextStep();
  };

  const handleNextSalonOwner = (data: GroomerOnboardingInfoType) => {
    setSalonOnwerFormData(data);
    nextStep();
  };

  const handlePostSalon = () => {
    // TODO : 데이터 post하기
    navigate('/');
  };

  return (
    <MobileLayout>
      <PageContainer padding="72px 20px" direction="column" justify="start">
        <StatusBar current={step} total={4} mode="onboarding" />
        {step === 1 && (
          <InputSalon
            salonFormData={salonFormData}
            setSalonFormData={setSalonFormData}
            onNext={handleNextSalon}
          />
        )}
        {step === 2 && <InputSalonOwner onNext={handleNextSalonOwner} />}
        {step === 3 && (
          <SalonConfirm salonFormData={salonFormData} onNext={nextStep} />
        )}
        {step === 4 && (
          <SalonOwnerConfirm
            salonOwnerFormData={salonOwnerFormData}
            onNext={handlePostSalon}
          />
        )}
      </PageContainer>
    </MobileLayout>
  );
};

const PageContainer = styled(Flex)`
  flex-grow: 1;
  position: relative;
`;

export default OnboardingPage;

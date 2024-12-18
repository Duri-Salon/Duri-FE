import { useNavigate } from 'react-router-dom';

import { Flex, Header, MobileLayout, SalonNavbar } from '@duri-fe/ui';
import {
  useGetAgeStatistic,
  useGetCharacterStatistic,
  useGetDiseaseStatistic,
  useGetRecentDaysIncome,
  // useGetSelectedMonthIncome,
  useGetThisMonthIncome,
} from '@duri-fe/utils';
import { MonthIncomeStatistic } from '@salon/components/income/MonthIncomeStatistic';
import { PetStatistic } from '@salon/components/income/PetStatistic';
import { RecentIncomeStatistic } from '@salon/components/income/RecentIncomeStatistic';

const IncomePage = () => {
  const navigate = useNavigate();
  const handleClickBack = () => {
    navigate('/');
  };

  const { data: monthIncomeData } = useGetThisMonthIncome({});
  // const { data: selectedIncomeData } = useGetSelectedMonthIncome({
  //   month: '2024-12',
  // });
  const { data: recentDaysIncomeData } = useGetRecentDaysIncome({});
  const { data: agePetStatistic } = useGetAgeStatistic({});
  const { data: diseasePetStatistic } = useGetDiseaseStatistic({});
  const { data: characterPetStatistic } = useGetCharacterStatistic({});

  return (
    <MobileLayout>
      <Header
        title="매출"
        titleAlign="start"
        backIcon
        onClickBack={handleClickBack}
      />
      <Flex direction="column" padding="0 0 128px 0">
        {monthIncomeData && (
          <MonthIncomeStatistic
            beforeRatio={monthIncomeData.beforeRatio}
            incomeMonthList={monthIncomeData.incomeMonthList}
          />
        )}

        {recentDaysIncomeData && (
          <RecentIncomeStatistic
            incomeMonthList={recentDaysIncomeData.incomeMonthList}
          />
        )}

        {agePetStatistic && diseasePetStatistic && characterPetStatistic && (
          <PetStatistic
            agePetStatistic={agePetStatistic?.ageList}
            diseasePetStatistic={diseasePetStatistic?.diseaseList}
            characterPetStatistic={characterPetStatistic?.characterList}
          />
        )}
      </Flex>
      <SalonNavbar />
    </MobileLayout>
  );
};
export default IncomePage;

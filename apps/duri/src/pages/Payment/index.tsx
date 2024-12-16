import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import PaymentWidget from '@duri/components/payment/Widget';
import { DuriNavbar, Flex, MobileLayout, Text } from '@duri-fe/ui';
import { useGetDetailQuotation } from '@duri-fe/utils';

const PaymentPage = () => {
  const location = useLocation();
  const { selectedQuotationId } = location.state; // state에서 quotationId 가져오기

  //매장 및 시술 정보
  if (selectedQuotationId === undefined) return;
  const { data: quotationData } = useGetDetailQuotation(selectedQuotationId);
  const [groomingList, setGroomingList] = useState<string[]>([]);

  useEffect(() => {
    if (quotationData) {
      const groomingList = [
        ...quotationData.menuDetail.groomingMenu,
        ...quotationData.menuDetail.additionalGrooming,
        ...quotationData.menuDetail.specialCare,
        ...quotationData.menuDetail.designCut,
      ];
      setGroomingList(groomingList);
    }
  }, [quotationData]);
  //쿠폰 정보 - 후순위!!!!!!

  return (
    <MobileLayout>
      {quotationData ? (
        <Flex direction="column">
          {/* 결제 방법 - 쿠폰 개발된다면 쿠폰 정보도 같이 넘겨야 함 */}
          <PaymentWidget
            groomingPrice={quotationData.quotation.priceDetail.totalPrice}
            groomingList={groomingList}
            quotationId={Number(selectedQuotationId)}
          />
        </Flex>
      ) : (
        <Flex>
          <Text>Loading...</Text>
        </Flex>
      )}
      <DuriNavbar />
    </MobileLayout>
  );
};

export default PaymentPage;

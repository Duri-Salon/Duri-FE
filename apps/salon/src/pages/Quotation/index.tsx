import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card, Flex, MobileLayout, Modal, PetInfo, SalonNavbar, SalonTag, Text, theme, WidthFitFlex } from "@duri-fe/ui"
import { useGetApprovedQuotationList, useGetNewRequestList, useModal } from "@duri-fe/utils";
import styled from "@emotion/styled";
import { DetailRequest } from "@salon/components/quotation/DetailRequest";
import { TabBarItem } from "@salon/components/quotation/TabBarItem"

const QuotationPage = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<string>('new')
  const [selectedRequestId, setSelectedRequestId] = useState<number | null>(null);
  const [selectedQuotationId, setSelectedQuotationId] = useState<number | null>(null);
  const { isOpenModal, openModal, closeModal } = useModal();

  const { data: newRequestList } = useGetNewRequestList();
  const { data: approvedQuotationList } = useGetApprovedQuotationList();

  const handleRequestClick = (requestId: number) => {
    setSelectedRequestId(requestId);
    openModal();
  }

  const handleQuotationClick = (requestId: number) => {
    setSelectedQuotationId(requestId);
    // openModal();
  }

  const handleNavigate = () => {
    navigate('/quotation/reservation');
  }

  const handleToggleTab = (currTab: string) => {
    setSelectedTab(currTab);
  }

  return (
    <MobileLayout backgroundColor={theme.palette.Gray_White}>
      <Flex
        height={60}
        padding="0 20px"
        gap={16}
        justify="flex-start"
        backgroundColor={theme.palette.White}
      >
        <TabBarItem label="견적" selected typo="Body1" fitContent />
        <TabBarItem
          label="예약"
          selected={false}
          typo="Body1Light"
          fitContent
          onClick={handleNavigate}
        />
      </Flex>
      <Flex
        height={48}
        justify="flex-start"
        backgroundColor={theme.palette.White}
      >
        <TabBarItem 
          label="새로운 견적 요청" 
          selected={selectedTab === 'new'} 
          typo={selectedTab === 'new' ? 'Title3' : 'Body2Light'}
          onClick={() => handleToggleTab('new')}
        />
        <TabBarItem 
          label="답장한 견적" 
          selected={selectedTab === 'approved'} 
          typo={selectedTab === 'approved' ? 'Title3' : 'Body2Light'}
          onClick={() => handleToggleTab('approved')}
        />
      </Flex>

      {selectedTab === 'new' ? 
        (newRequestList && newRequestList.length > 0 ? (
          <Flex direction="column" gap={8} padding="30px 20px">
            {newRequestList.map((request) => (
              <Flex key={request.requestId} onClick={() => handleRequestClick(request.requestId)}>
                <Card borderRadius={12} padding="6px">
                  <PetInfo
                    themeVariant="medium"
                    image={request.petImage}
                    name={request.petName}
                    breed={request.petBreed}
                    age={request.petAge}
                    neutering={request.petNeutering}

                    // TODO : gender, weight API 수정 필요함
                    gender="F"
                    weight={7.3}
                  />
                </Card>
              </Flex>
            ))}
          </Flex>
        ) : (
          // TODO : 임시 대체뷰 수정 필요
          <FlexGrow>
            <Text>새로운 요청이 없어요.</Text>
          </FlexGrow>
        )) : (
          approvedQuotationList && approvedQuotationList.length > 0 ? (
            <Flex direction="column" gap={8} padding="30px 20px">
            {approvedQuotationList.map((quotation) => (
              <Flex key={quotation.requestId} onClick={() => handleQuotationClick(quotation.requestId)}>
                <Card borderRadius={12} padding="6px" direction="row">
                  <PetInfo
                    themeVariant="medium"
                    image={quotation.petImage}
                    name={quotation.petName}
                    breed={quotation.petBreed}
                    age={quotation.petAge}
                    neutering={quotation.petNeutering}

                    // TODO : gender, weight API 수정 필요함
                    gender="F"
                    weight={7.3}
                  />
                  <TagWrapper margin="0 14px">
                    <SalonTag
                      content={quotation.status === 'approved' ? '수락됨' : quotation.status === 'expired' ? '만료됨' : '대기중'}
                      bg={quotation.status === 'approved' ? theme.palette.Normal100 : theme.palette.Gray50} 
                      colorCode={quotation.status === 'approved' ? theme.palette.Normal700 : theme.palette.Gray300} 
                      typo="Label3"
                      borderRadius={99}
                      width="auto"
                      height={26}
                      padding="6px 10px"
                    />
                  </TagWrapper>
                </Card>
              </Flex>
            ))}
          </Flex>
        ) : (
          // TODO : 임시 대체뷰 수정 필요
          <FlexGrow>
            <Text>답장한 견적이 없어요.</Text>
          </FlexGrow>
        ))
      }

      <SalonNavbar />

      {selectedRequestId &&
        <Modal title='요청서' margin="20px" isOpen={isOpenModal && (selectedTab === 'new')} toggleModal={closeModal}>
          <DetailRequest requestId={selectedRequestId} closeModal={closeModal} />
        </Modal>
      }

      {selectedQuotationId &&
        <Modal title='견적서' margin="20px" isOpen={isOpenModal && (selectedTab === 'approved')} toggleModal={closeModal}>
          <DetailRequest requestId={selectedQuotationId} closeModal={closeModal} />
        </Modal>
      }
    </MobileLayout>
  )
}

const FlexGrow = styled(Flex)`
  flex-grow: 1;
`

const TagWrapper = styled(WidthFitFlex)`
  flex-shrink: 0;
`

export default QuotationPage;
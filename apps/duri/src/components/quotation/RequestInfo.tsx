import { Flex, Modal, NextArrow, RequestQuotation, Text, theme } from '@duri-fe/ui';
import { useModal } from '@duri-fe/utils';
import { format } from 'date-fns';

interface RequestInfoProps {
    requestId: number;
    createdAt: string;
    expiredAt: string;
    expired?: boolean;
    margin?: string;
  }

export const RequestInfo = ({
  requestId,
  createdAt,
  expiredAt,
  expired = false,
  margin,
}: RequestInfoProps) => {
  const { isOpenModal, toggleModal } = useModal();
  return (
    <Flex
    direction="column"
    gap={20}
    padding="0 11px"
    margin={margin ?? `${margin}`}
    onClick={toggleModal}
  >
      <Flex gap={8} justify="flex-start">
        <Text typo="Title3" colorCode={expired ? theme.palette.Gray300 : theme.palette.Normal700}>
          요청서{requestId}
        </Text>
        <NextArrow width={22} height={23} />
      </Flex>
      <Flex direction="column" gap={12}>
        <Flex justify="space-between">
          <Text typo="Label4" colorCode={theme.palette.Gray300}>
            요청서 전송 일자
          </Text>
          <Text typo="Caption2" colorCode={theme.palette.Gray300}>
            {format(createdAt, 'yyyy-MM-dd HH:mm')}
          </Text>
        </Flex>
        <Flex justify="space-between">
          <Text typo="Label4" colorCode={theme.palette.Alert}>
            요청서 마감 시간
          </Text>
          <Text typo="Caption2" colorCode={theme.palette.Gray300}>
            {format(expiredAt, 'yyyy-MM-dd HH:mm')}
          </Text>
        </Flex>
      </Flex>
      <Modal isOpen={isOpenModal} toggleModal={toggleModal} title='요청서'>
        <RequestQuotation />
      </Modal>
    </Flex>
  );
};

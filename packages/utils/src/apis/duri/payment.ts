import { duriInstance } from '../axiosConfig';
import {
  GetUuidResponse,
  HandlePaymentProps,
  PostAmountProps,
  PostPaymentProps,
  PostPaymentResponse,
} from '../types';

export const getUUID = async (): Promise<GetUuidResponse['response']> => {
  const response = await duriInstance.get('/payments/keys');
  return response.data.response;
};

export const postAmount = async (
  saveData: PostAmountProps,
): Promise<PostPaymentResponse> => {
  const response = await duriInstance.post('/payments/amount-save', saveData);
  return response.data.response;
};

export const handlePayment = async ({
  widgets,
  groomingList,
  orderId,
  quotationId
}: HandlePaymentProps) => {
  try {
    await widgets.requestPayment({
      orderId: orderId,
      orderName: `${groomingList[0]} 외 ${groomingList.length - 1}건`,
      successUrl: `${window.location.origin}/payment/success?quotationId=${quotationId}`,
      failUrl: `${window.location.origin}/payment/fail`,
      // metadata: {
      //   shopName: shopName,
      //   date: createdAt,
      //   quotationId: quotationId
      // },
    });
  } catch (error) {
    console.log('결제 요청 실패 : ', error);
  }
};

export const postAmountVerity = async (
  verifyData: PostAmountProps,
): Promise<PostPaymentResponse> => {
  const response = await duriInstance.post(
    '/payments/amount-verify',
    verifyData,
  );
  return response.data;
};

export const postPaymentConfirm = async (
  paymentData: PostPaymentProps,
): Promise<PostPaymentResponse> => {
  const response = await duriInstance.post('/payments/confirm', paymentData);
  console.log("결제 axios: ",response.data);
  return response.data;
};

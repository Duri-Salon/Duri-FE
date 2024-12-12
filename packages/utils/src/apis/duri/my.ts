import { duriInstance } from '../axiosConfig';
import { MyReviewResponseType } from '../types/my';

export const getMyReviews = async (): Promise<
  MyReviewResponseType['response']
> => {
  const { data } = await duriInstance.get('/user/review');

  return data.response;
};

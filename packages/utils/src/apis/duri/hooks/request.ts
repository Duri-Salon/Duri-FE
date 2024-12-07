import { useMutation } from '@tanstack/react-query';

import { RequestProps } from '../../types/quotation';
import { postRequestQuotation } from '../request';

// import { BaseResponse } from './../../types/base';

// interface PetInfoType {
//     petId: number;
//     petName: string;
//     petImage: string;
//     breed: string;
//     age: string;
//     weight: string;
//     gender: string;
// }

// interface PetInfoResponse extends BaseResponse{
//     response: PetInfoType
// }

// export const useGetPetInfo = () => {
//     const {data} = useQuery({
//       queryKey: ['getPetInfo'],
//       queryFn: () => getPetInfo(),
//       staleTime: 1000 * 60 * 10,
//     });
//     return data;
//   };

export const useRequestQuotation = () => {
  return useMutation<void, Error, RequestProps>({
    mutationFn: (request: RequestProps) => postRequestQuotation(request),
    onError: (error) => {
      console.error(error);
      alert('견적서 요청을 실패했습니다.');
    },
  });
};

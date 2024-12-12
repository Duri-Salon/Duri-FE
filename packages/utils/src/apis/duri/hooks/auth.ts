import { BaseError, duriNaverLogin, NaverLoginResponse } from '@duri-fe/utils';
import { UseQueryProps } from '@duri-fe/utils/types';
import { useQuery } from '@tanstack/react-query';

type UseDuriNaverLoginProps = UseQueryProps<
  NaverLoginResponse['response'],
  BaseError
> & {
  providerId: string;
};

/** 고객 네이버 소셜 로그인 hook */
export const useDuriNaverLogin = ({
  providerId,
  queryKey,
  options,
}: UseDuriNaverLoginProps) => {
  return useQuery<NaverLoginResponse['response'], BaseError>({
    queryKey: ['duriNaverLogin', ...(queryKey || [])],
    queryFn: () => duriNaverLogin(providerId),
    staleTime: Infinity,
    ...options,
  });
};

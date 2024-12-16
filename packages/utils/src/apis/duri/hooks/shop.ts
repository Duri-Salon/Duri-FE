import { useQuery, UseQueryResult } from '@tanstack/react-query';

import {
  BaseError,
  CenterInfoType,
  SearchParamType,
  ShopDetailParamType,
  ShopDetailResponse,
  ShopInfoResponse,
  ShopReviewListResponse,
} from '../../types';
import { UseQueryProps } from '../../types/tanstack';
import {
  getNearByShopInfo,
  getSearchShopResult,
  getShopDetailInfo,
  getShopReviewList,
} from '../shop';

type UseGetNearByShopProps = UseQueryProps<
  ShopInfoResponse['response'],
  BaseError
> & {
  centerInfo: CenterInfoType;
  sortby: string;
};

export const useGetNearByShopInfo = ({
  queryKey,
  options,
  centerInfo,
  sortby,
}: UseGetNearByShopProps) => {
  return useQuery({
    queryKey: ['getNearByShopInfo', centerInfo, ...(queryKey || [])],
    queryFn: () => getNearByShopInfo(centerInfo, sortby),
    enabled: !!centerInfo,
    ...options,
  });
};

type UseGetSearchShopResultProps = UseQueryProps<
  ShopInfoResponse['response'],
  BaseError
> & {
  searchInfo: SearchParamType;
};

export const useGetSearchShopResult = ({
  queryKey,
  options,
  searchInfo,
}: UseGetSearchShopResultProps): UseQueryResult<
  ShopInfoResponse['response'],
  BaseError
> => {
  return useQuery<ShopInfoResponse['response'], BaseError>({
    queryKey: ['getSearchShopResult', searchInfo, ...(queryKey || [])],
    queryFn: () => getSearchShopResult(searchInfo),
    enabled: !!searchInfo.search.trim(),
    ...options,
  });
};

type UseGetShopDetailProps = UseQueryProps<
  ShopDetailResponse['response'],
  BaseError
> & {
  shopBaseInfo: ShopDetailParamType;
};

export const useGetShopDetailInfo = ({
  queryKey,
  options,
  shopBaseInfo,
}: UseGetShopDetailProps): UseQueryResult<
  ShopDetailResponse['response'],
  BaseError
> => {
  return useQuery<ShopDetailResponse['response'], BaseError>({
    queryKey: ['getSearchShopResult', shopBaseInfo, ...(queryKey || [])],
    queryFn: () => getShopDetailInfo(shopBaseInfo),
    enabled: !!shopBaseInfo,
    ...options,
  });
};

type UseGetShopReviewList = UseQueryProps<
  ShopReviewListResponse['response'],
  BaseError
> & {
  shopId: number;
};

export const UseGetShopReviewList = ({
  queryKey,
  options,
  shopId,
}: UseGetShopReviewList) => {
  return useQuery({
    queryKey: ['getPortfolioDetail', shopId, ...(queryKey || [])],
    queryFn: () => getShopReviewList({ shopId }),
    enabled: !!shopId,
    ...options,
  });
};

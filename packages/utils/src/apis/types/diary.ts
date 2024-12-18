import { BaseResponse } from './base';

export interface DiaryDataType {
  friendly: '베스트 프렌드' | '라뽀가 많이 형성됐어요' | '우리 조금 어색해요';
  reaction: '다소 공격적이에요' | '미용도구를 피해요' | '별다른 반응이 없어요';
  behavior: '피하려는 행동이 있어요' | '왕왕!내가 제일 용맹하개';
}

export interface DiaryDataResponse extends BaseResponse {
  response: DiaryDataType;
}

export interface DiaryDetailType {
  feedbackId: number;
  friendly: string;
  reaction: string;
  behavior: string;
  noticeContent: string;
  feedbackImages: string[];
}

export interface DiaryDetailResponse extends BaseResponse {
  response: DiaryDetailType;
}

export const DEFAULT_AGE_LABEL = ['~3세', '3세~7세', '7세~'];

type PetStatisticMentType = {
  [key: string]: Record<string, string>;
};

export const PET_STATISTIC_MENT: PetStatisticMentType = {
  나이: {
    '~3세': '3세 미만인 아이들이 가장 자주 와요!',

    '3세~7세': '3세~7세 아이들이 가장 자주 와요!',

    '7세~': '7세 이상 아이들이 가장 자주 와요!',
  },
  질환: {
    귀질환: '귀 질환이 있는 아이들이 가장 자주 와요!',

    관절질환: '관절질환이 있는 아이들이 가장 자주 와요!',

    기저질환: '기저질환이 있는 아이들이 가장 자주 와요!',

    피부질환: '피부질환이 있는 아이들이 가장 자주 와요!',

    해당없음: '다양한 아이들이 자주 와요!',
  },
  성격: {
    입질: '입질이 있는 아이들이 가장 자주 와요!',

    낯가리는: '낯가리는 아이들이 가장 자주 와요!',

    예민한: '예민한 아이들이 가장 자주 와요!',

    친화적: '친화적인 아이들이 가장 자주 와요!',

    얌전한: '얌전한 아이들이 가장 자주 와요!',

    겁많은: '겁많은 아이들이 가장 자주 와요!',
  },
};
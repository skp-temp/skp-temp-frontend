// colors
export const SEMANTIC_COLOR = {
  BLUE: '#007AFF',
  GREEN: '#35C759',
  RED: '#FF3B2F',
  ORANGE: '#FF9500',
  YELLOW: '#FFCC02',
} as const;

export const GRAY_COLOR = {
  WHITE: '#FFFFFF',
  GRAY_100: '#F9F9FB',
  GRAY_150: '#F6F6FA',
  GRAY_200: '#F2F2F6',
  GRAY_300: '#E4E4EA',
  GRAY_400: '#B1B1BB',
  GRAY_500: '#8E8E93',
  GRAY_600: '#636366',
  GRAY_700: '#48484A',
  GRAY_800: '#3A3A3C',
  GRAY_900: '#1C1C1E',
  BLACK: '#000000',
} as const;

export const THEME_COLOR = {
  WORKOUT: {
    '100': '#FCFFE8',
    '200': '#EBFD73',
    '300': '#63A520',
    '400': '#00724F',
  } as const,
  MONEY: {
    '100': '#FFFBD8',
    '200': '#FFEC55',
    '300': '#F8A120',
    '400': '#FF7A00',
  } as const,
  DIET: {
    '100': '#FFF3E5',
    '200': '#FFCBB4',
    '300': '#F1805C',
    '400': '#BA0000',
  } as const,
  BEAUTY: {
    '100': '#FFF1FC',
    '200': '#FFCFF5',
    '300': '#DD7EE4',
    '400': '#A600AF',
  } as const,
  HAPPY: {
    '100': '#F3FFDF',
    '200': '#BAF59F',
    '300': '#648961',
    '400': '#30712E',
  } as const,
  STUDY: {
    '100': '#F3F0FF',
    '200': '#CFC8FF',
    '300': '#8F86CD',
    '400': '#5B50A7',
  } as const,
  HUSTLE: {
    '100': '#E6F1FF',
    '200': '#B1D5FF',
    '300': '#7A9DD2',
    '400': '#5C41E3',
  } as const,
  PET: {
    '100': '#FFEFE1',
    '200': '#F2C092',
    '300': '#B97D45',
    '400': '#703F12',
  },
} as const;

// category

export const CATEGORY_OBJECT = {
  WORKOUT: '운동',
  MONEY: '금전',
  DIET: '식습관',
  BEAUTY: '뷰티',
  HAPPY: '행복',
  STUDY: '공부',
  HUSTLE: '갓생',
  PET: '반려동물',
};

export const CATEGORY_LIST: CategoryType[] = [
  'WORKOUT',
  'MONEY',
  'DIET',
  'BEAUTY',
  'HAPPY',
  'STUDY',
  'HUSTLE',
  'PET',
];

export const SELECT_OPTION_LIST: string[] = [
  '모든 아이템',
  '소품',
  '의상',
  '악세서리',
];

export type CategoryType =
  | 'WORKOUT'
  | 'MONEY'
  | 'DIET'
  | 'BEAUTY'
  | 'HAPPY'
  | 'STUDY'
  | 'HUSTLE'
  | 'PET';
// 타입

export interface Data {
  code: string;
  message: string;
  status: string;
}

// 개발

export const BASE_URL_DEV = 'http://13.125.146.145:8080/';

export const TOKEN_DEV =
  'I4OTEzNTA5LCJzdWIiOiIzIn0.JmSfWbojKRYP-sd7znZmD-LnF3wPeBHr23bMnySRCVw';

import { create } from 'zustand';
import { CATEGORY_LIST } from './constants';

interface InviteInputData {
  inputData: string;
  setInputData: (inputData: string) => void;
}

export const useInviteInputData = create<InviteInputData>((set) => ({
  inputData: '',
  setInputData: (inputData) => {
    set((state) => ({ inputData: inputData }));
  },
}));

interface MessageInputData {
  inputData: string;
  setInputData: (inputData: string) => void;
}

export const useMessageInputData = create<MessageInputData>((set) => ({
  inputData: '',
  setInputData: (inputData) => {
    set((state) => ({ inputData: inputData }));
  },
}));

interface MessageFocus {
  isFocus: boolean;
  setIsFocus: (isFocus: boolean) => void;
}

export const useMessageFocus = create<MessageFocus>((set) => ({
  isFocus: false,
  setIsFocus: (isFocus) => {
    set((state) => ({ isFocus: isFocus }));
  },
}));

interface GiftItemSelect {
  selectNum: number;
  setSelectNum: (selectNum: number) => void;
}

export const useGiftItemSelect = create<GiftItemSelect>((set) => ({
  selectNum: 0,
  setSelectNum: (selectNum) => {
    set((state) => ({ selectNum: selectNum }));
  },
}));

interface OpenSelectBox {
  isOpenSelectBox: boolean;
  setIsOpenSelectBox: (isFocus: boolean) => void;
}

export const useOpenSelectBox = create<OpenSelectBox>((set) => ({
  isOpenSelectBox: false,
  setIsOpenSelectBox: (isOpenSelectBox) => {
    set((state) => ({ isOpenSelectBox: isOpenSelectBox }));
  },
}));

interface ComboBoxSelect {
  comboBox: string;
  setComboBox: (comboBox: string) => void;
}

export const useComboBox = create<ComboBoxSelect>((set) => ({
  comboBox: '모든 아이템',
  setComboBox: (comboBox) => {
    set((state) => ({ comboBox: comboBox }));
  },
}));

interface CategorySelect {
  categorySelect: string[];
  setCategorySelect: (comboBox: string[]) => void;
}

export const useCategorySelect = create<CategorySelect>((set) => ({
  categorySelect: Object.values(CATEGORY_LIST),
  setCategorySelect: (categorySelect) => {
    set((state) => ({ categorySelect: categorySelect }));
  },
}));

interface OpenModal {
  isOpenModal: number;
  setIsOpenModal: (isOpenModal: number) => void;
}

export const useIsOpenModal = create<OpenModal>((set) => ({
  isOpenModal: 0,
  setIsOpenModal: (isOpenModal) => {
    set((state) => ({ isOpenModal: isOpenModal }));
  },
}));

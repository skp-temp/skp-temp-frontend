import { NumberLiteralType } from 'typescript';
import { create } from 'zustand';

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

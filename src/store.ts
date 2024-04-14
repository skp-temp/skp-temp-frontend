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

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

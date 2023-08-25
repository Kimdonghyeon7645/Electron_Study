import create from 'zustand';
import { MODE } from '../constants/enums';

const useStore = create((set) => ({
    mode: MODE.EDIT,
    setMode: (mode) => set({ mode: mode }),
}));

export default useStore;
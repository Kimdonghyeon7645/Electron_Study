import create from "zustand";
import { INSERTABLE_OBJ, MODE } from "../constants/enums";

const useStore = create((set) => ({
  mode: MODE.EDIT,
  target: INSERTABLE_OBJ.WIRE,
  wirePoint1: [],
  setMode: (mode) => set({ mode: mode }),
  setTarget: (obj) => {
    set({ target: obj });
    if (obj === INSERTABLE_OBJ.WIRE) set({ wirePoint1: [] });
  },
  setWireFirstPoint: (x, y) => set({ wirePoint1: [x, y] }),
}));

export default useStore;

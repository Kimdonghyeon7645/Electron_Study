import create from "zustand";
import { CMD, INSERTABLE_OBJ, MODE } from "../constants/enums";

const useStore = create((set) => ({
  mode: MODE.EDIT,
  command: null,
  insertTarget: null,
  wirePoint1: [],
  setMode: (mode) => {
    set({ mode: mode });
    if (mode === MODE.INSERT) set({ insertTarget: null });
  },
  setCommand: (cmd) => set({ command: cmd }),
  setInsertTarget: (obj) => {
    set({ command: CMD.INSERT });
    set({ insertTarget: obj });
    if (obj === INSERTABLE_OBJ.WIRE) set({ wirePoint1: [] });
  },
  setWireFirstPoint: (x, y) => set({ wirePoint1: [x, y] }),
}));

export default useStore;

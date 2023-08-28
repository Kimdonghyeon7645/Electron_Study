import create from "zustand";
import { CMD, INSERTABLE_OBJ, MODE } from "../constants/enums";

const useBaseStore = create((set) => ({
  mode: MODE.EDIT,
  command: null,
  insertTarget: null,
  wirePoint1: {},
  wirePoint2: {},
  lines: [],
  setMode: (mode) => {
    set({ mode: mode });
    if (mode === MODE.INSERT) set({ insertTarget: null });
  },
  setCommand: (cmd) => set({ command: cmd }),
  setInsertTarget: (obj) => {
    set({ command: CMD.INSERT, insertTarget: obj });
    if (obj === INSERTABLE_OBJ.WIRE) set({ wirePoint1: {} });
  },
  setWirePoint1: (point) => set({ wirePoint1: point }),
  setWirePoint2: (point) => {
    set((state) => {
      const dx = Math.abs(point.x - state.wirePoint1.x);
      const dy = Math.abs(point.y - state.wirePoint1.y);
      return {
        wirePoint2:
          dy > dx
            ? { x: state.wirePoint1.x, y: point.y }
            : { x: point.x, y: state.wirePoint1.y },
      };
    });
  },
  insertLine: () => {
    set((state) => ({
      lines: [
        ...state.lines,
        {
          id: state.lines[state.lines.length - 1]?.id ?? 0,
          start: { x: state.wirePoint1.x, y: state.wirePoint1.y },
          end: { x: state.wirePoint2.x, y: state.wirePoint2.y },
        },
      ],
      wirePoint1: {},
      wirePoint2: {},
    }));
  },
}));

export default useBaseStore;

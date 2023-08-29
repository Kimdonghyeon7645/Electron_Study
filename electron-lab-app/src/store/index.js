import create from "zustand";
import { CMD, MODE } from "../constants/enums";
import { SYMBOLS } from "constants/symbols";

const useBaseStore = create((set) => ({
  mode: MODE.INSERT,
  command: null,
  insertTarget: null,
  wirePoint1: {},
  wirePoint2: {},
  isAddWirePoint1: false,
  wirePoint1Dot: {},
  tempSymbol: {},
  symbols: [],
  lines: [],
  dots: [],
  setMode: (mode) => {
    set({ mode: mode });
    if (mode === MODE.INSERT) set({ insertTarget: null });
  },
  setCommand: (cmd) => set({ command: cmd }),
  setInsertTarget: (obj) => {
    set({
      command: CMD.INSERT,
      insertTarget: obj,
      tempSymbol: {},
      wirePoint1: {},
      wirePoint2: {},
      wirePoint1Dot: {},
      isAddWirePoint1: false,
    });
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
  addWirePoint1: (dot) => set({ isAddWirePoint1: true, wirePoint1Dot: dot }),
  insertLine: () =>
    set((state) => {
      const isReverse =
        state.wirePoint1.x > state.wirePoint2.x ||
        state.wirePoint1.y > state.wirePoint2.y;
      const point1 = isReverse ? state.wirePoint2 : state.wirePoint1;
      const point2 = isReverse ? state.wirePoint1 : state.wirePoint2;
      return {
        lines: [
          ...state.lines,
          {
            id:
              state.lines.length > 0
                ? state.lines[state.lines.length - 1].id + 1
                : 0,
            start: { x: point1.x, y: point1.y },
            end: { x: point2.x, y: point2.y },
            symbols: [],
          },
        ],
        wirePoint1: {},
        wirePoint2: {},
        wirePoint1Dot: {},
        isAddWirePoint1: false,
      };
    }),
  setTempSymbol: (symbol) => set({ tempSymbol: symbol }),
  addSymbol: () =>
    set((state) => {
      const newLines = [...state.lines];
      const newSymbol = JSON.parse(JSON.stringify(state.tempSymbol));
      const targetLine = { ...newLines[newSymbol.line] };

      targetLine.symbols = [
        ...targetLine.symbols,
        { x: newSymbol.x, y: newSymbol.y, type: newSymbol.type },
      ];
      targetLine.symbols.sort((a, b) => a.x - b.x + (a.y - b.y));
      newLines[newSymbol.line] = targetLine;
      newSymbol.label =
        SYMBOLS[newSymbol.type].label +
        (state.symbols.filter((e) => e.type === newSymbol.type).length + 1);

      return {
        lines: newLines,
        symbols: [...state.symbols, newSymbol],
        tempSymbol: {},
      };
    }),
}));

export default useBaseStore;

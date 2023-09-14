import { create } from "zustand";

const useBaseStore = create((set) => ({
  wirePoint1: {},
  wirePoint2: {},
  isFixWirePoint1: false,
  tempSymbol: {},
  symbols: [],
  lines: [],
  dots: [],
  texts: [],
  inputBox: {},
  inputBoxWidth: 10,
  editTarget: {},

  setWirePoint1: (point) => set({ wirePoint1: point }),
  setWirePoint2: (point) => {
    set((state) => {
      const dx = Math.abs(point.x - state.wirePoint1.x);
      const dy = Math.abs(point.y - state.wirePoint1.y);
      return {
        wirePoint2: dy > dx ? { x: state.wirePoint1.x, y: point.y } : { x: point.x, y: state.wirePoint1.y },
      };
    });
  },
  fixWirePoint1: () => set({ isFixWirePoint1: true }),
  insertLine: (dots) =>
    set((state) => {
      const isReverse = state.wirePoint1.x > state.wirePoint2.x || state.wirePoint1.y > state.wirePoint2.y;
      const point1 = isReverse ? state.wirePoint2 : state.wirePoint1;
      const point2 = isReverse ? state.wirePoint1 : state.wirePoint2;
      const newLines = [...state.lines];
      const newDots = [...state.dots];
      const lineId = state.lines.length > 0 ? state.lines[state.lines.length - 1].id + 1 : 0;
      /** 전선에 포함된 접점(dot) 등록 로직 START */
      const currentLineDots = [];
      const insertDots = [];
      let dotIdOffset = 0;
      for (const dotDat of dots) {
        if (!dotDat?.x) continue;

        const targetLine = { ...newLines[dotDat.line] };
        const anotherDots = targetLine.dots.filter((e) => e.x < dotDat.x + 2 && dotDat.x - 2 < e.x && e.y < dotDat.y + 2 && dotDat.y - 2 < e.y);
        if (anotherDots.length > 0) {
          const targetDot = { ...anotherDots[0] };
          targetDot.isCommon = true;
          targetDot.lines.push(lineId);
          currentLineDots.push(targetDot);
          newDots[targetDot.id] = targetDot;
        } else {
          const dot = {
            id: (state.dots.length > 0 ? state.dots[state.dots.length - 1].id + 1 : 0) + dotIdOffset,
            x: dotDat.x,
            y: dotDat.y,
            lines: [dotDat.line],
            isCommon:
              (targetLine.start.x + 4 < dotDat.x && dotDat.x < targetLine.end.x - 4) ||
              (targetLine.start.y + 4 < dotDat.y && dotDat.y < targetLine.end.y - 4),
          };
          insertDots.push(dot);
          currentLineDots.push(dot);
          targetLine.dots.push(dot);
          newLines[dotDat.line] = targetLine;
          dotIdOffset += 1;
        }
      }
      /** 전선에 포함된 접점(dot) 등록 로직 END */
      return {
        lines: [
          ...newLines,
          {
            id: lineId,
            start: { x: point1.x, y: point1.y },
            end: { x: point2.x, y: point2.y },
            symbols: [],
            dots: currentLineDots,
          },
        ],
        dots: [...newDots, ...insertDots],
        wirePoint1: {},
        wirePoint2: {},
        isFixWirePoint1: false,
      };
    }),
  setTempSymbol: (symbol) => set({ tempSymbol: symbol }),
  addSymbol: () =>
    set((state) => {
      const newSymbol = JSON.parse(JSON.stringify(state.tempSymbol));
      const newLines = [...state.lines];
      const targetLine = { ...newLines[newSymbol.line] };

      newSymbol.id = state.symbols.length > 0 ? state.symbols[state.symbols.length - 1].id + 1 : 0;
      targetLine.symbols = [
        ...targetLine.symbols,
        {
          id: newSymbol.id,
          x: newSymbol.x,
          y: newSymbol.y,
          type: newSymbol.type,
        },
      ];
      targetLine.symbols.sort((a, b) => a.x - b.x + (a.y - b.y));
      newLines[newSymbol.line] = targetLine;

      return {
        lines: newLines,
        symbols: [...state.symbols, newSymbol],
        tempSymbol: {},
      };
    }),
  setInputBox: (data) => set({ inputBox: data }),
  setInputBoxWidth: (width) => set({ inputBoxWidth: width }),
  saveInputBox: () =>
    set((state) => {
      if (state.inputBox?.value?.length > 0)
        return {
          texts: [
            ...state.texts,
            {
              x: state.inputBox.x,
              y: state.inputBox.y,
              text: state.inputBox.value,
            },
          ],
          inputBox: {},
        };
      else return { inputBox: {} };
    }),

  clearCanvas: () => set({ symbols: [], lines: [], dots: [], texts: [] }),
  loadDataFile: (data) =>
    set({
      symbols: [...data.symbols],
      lines: [...data.lines],
      dots: [...data.dots],
      texts: [...data.texts],
    }),
  setEditTarget: (id) => set({ editTarget: id }),
}));

export default useBaseStore;

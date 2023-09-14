import { CMD, MODE } from "constants/enums";
import { create } from "zustand";

const useCommandStore = create((set) => ({
  mode: MODE.INSERT,
  command: null,
  insertTarget: null,
  selectOption: {},
  insertTargetOptions: [],
  isOptionModalOpen: false,
  optionModalInfo: {},

  // TODO : mode, command, insertTarget 전환시 기존 삽입모드에서 진행하던 내용 지우기
  setMode: (mode) => {
    set({ mode: mode });
    if (mode === MODE.INSERT) set({ insertTarget: null, isOptionModalOpen: false });
  },
  setCommand: (cmd) => set({ command: cmd }),
  setInsertTarget: (obj) => {
    set({
      command: CMD.INSERT,
      insertTarget: obj,
      isOptionModalOpen: false,
      selectOption: {},
    });
  },
  setSelectOption: (option) => set({ selectOption: option }),
  setInsertTargetOptions: (options) => set({ insertTargetOptions: options }),
  setIsOptionModalOpen: (value) => set({ isOptionModalOpen: value, optionModalInfo: {}, insertTargetOptions: {} }),
  setOptionModalInfo: (info) => set({ optionModalInfo: info }),
}));

export default useCommandStore;

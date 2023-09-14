import { toggleFullScreen } from "helpers/toggleFullScreen";
import { updateZoom } from "helpers/zoomScreen";

const { create } = require("zustand");

const useViewStore = create((set) => ({
    isFullScreen: false,
    zoomScreen: 100,

    toggleFullScreen: () => {
        toggleFullScreen();
        set((state) => ({ isFullScreen: !state.isFullScreen }));
      },
      setZoom: (zoom) => {
        if (70 <= zoom && zoom <= 300) {
          set({ zoomScreen: zoom });
          updateZoom(zoom);
        }
      },
}));

export default useViewStore;
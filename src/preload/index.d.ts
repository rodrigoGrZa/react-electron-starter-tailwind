import { ElectronAPI } from "@electron-toolkit/preload";

export {};

declare global {
  interface Window {
    electron: {
      getVersions: () => {
        node: string;
        chrome: string;
        electron: string;
      };
    };
  }
}

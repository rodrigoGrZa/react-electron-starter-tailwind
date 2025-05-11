import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("electron", {
  getVersions: () => ({
    node: process.versions.node,
    chrome: process.versions.chrome,
    electron: process.versions.electron,
  }),
});

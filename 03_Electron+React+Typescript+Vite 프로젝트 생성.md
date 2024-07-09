# 03 Electron+React+Typescript+Vite 프로젝트 생성

## 1. 프로젝트 생성
```sh
npm create vite@latest
npm install -D concurrently cross-env electron electron-builder wait-on
```

## 2. package.json 수정
아래 내용 추가
```json
{
    ...
    "main": "electron/main.js",
    "scripts": {
        ...
        "ts_compile": "tsc ./electron/main.ts",
        "electron": "npm run ts_compile && concurrently -k \"cross-env BROWSER=none npm run dev\" \"wait-on http://localhost:5173 && cross-env IS_DEV=true electron .\"",
        "electron:build": "npm run ts_compile && npm run build && electron-builder"
    },
    "build": {
        "appId": "com.회사코드.",
        "productName": "프로그램명",
        "copyright": "Copyright © 2024 ${author}",
        "files": [
            "build/**/*",
            "node_modules/**/*"
        ],
        "directories": {
            "buildResources": "assets"
        },
        "extraMetadata": {
            "main": "build/electron/main.js",
            "output": "dist_electron"
        },
    },
}
```
아래 내용 제거
```sh
"type": "module",
```

## 3. 일렉트론 코드 추가
루트폴더에 `electron` 폴더 생성, `main.ts` 파일 생성 후 아래 내용 추가
```ts
import { app, BrowserWindow } from "electron";
import * as path from "path";

let mainWindow: BrowserWindow;
const isDev: boolean = process.env.IS_DEV == "true";

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 760,
    center: true,
    resizable: true,
    fullscreen: false,
    fullscreenable: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      webviewTag: false,
      // enableRemoteModule: true,
    //   preload: isDev
    //     ? path.join(__dirname, "../electron/preload.js")
    //     : path.join(__dirname, "../electron/preload.js"),
      devTools: isDev,
    },
    // frame: false, // 기본 타이틀바 제거
    // icon: path.join(__dirname, "../public/favicon.ico"),
    title: "타이틀 입니다",
  });

  /**
   * 운영: 패키지 내부 리소스(file://...)에 접근
   * 개발: 개발 도구에서 호스팅하는 주소(localhost:5173)에서 로드
   */
  mainWindow.loadURL(isDev ? "http://localhost:5173" : `file://${path.join(__dirname, "../build/index.html")}`);

  if (isDev) mainWindow.webContents.openDevTools({ mode: "detach" });
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
```


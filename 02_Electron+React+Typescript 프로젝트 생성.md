# 02_Electron+React+Typescript 프로젝트 생성

> - 01\_에서 진행한 방식과 동일하나, typescript만 추가됨
>   [참고](https://velog.io/@dev_hikun/Electron-React-typescript-%EB%8D%B0%EC%8A%A4%ED%81%AC%ED%83%91-%EC%95%B1-%EB%A7%8C%EB%93%A4%EA%B8%B0-1-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EC%84%A4%EC%A0%95)
> - (24.03.02 추가) `electron-is-dev` import 이슈로 `app.isPackaged` 로 대체하여 사용

## 1. 프로젝트 생성 - 라이브러리 설치

```sh
npx create-react-app 프로젝트명 --template typescript
cd 프로젝트명
npm install --save-dev electron electron-builder concurrently wait-on cross-env typescript
```

## 2. 일렉트론 기본 ts 파일 추가

```ts
import { app, BrowserWindow } from "electron";
import * as path from "path";

const isDev = !app.isPackaged;
let mainWindow: BrowserWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    center: true,
    resizable: true,
    fullscreen: false,
    fullscreenable: true,
    webPreferences: {
      // node환경처럼 사용하기
      nodeIntegration: true,
      // 개발자도구
      devTools: isDev,
    },
  });

  // production에서는 패키지 내부 리소스(file://...)에 접근
  // 개발 중에는 개발 도구에서 호스팅하는 주소(localhost:3000)에서 로드
  mainWindow.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`);

  if (isDev) mainWindow.webContents.openDevTools({ mode: "detach" });

  mainWindow.setResizable(true);
  mainWindow.on("closed", () => (mainWindow = undefined!));
  mainWindow.focus();
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

## 3. 패키지 파일 수정

- 아래에서 `public/electron.ts` 를 2번에서 추가한 ts 파일의 경로로 기입

```json
  "main": "public/electron.ts",
  "homepage": "./",
  "scripts": {
    "react-start": "react-scripts start",
    "react-build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "start": "tsc ./public/electron.ts && concurrently \"cross-env BROWSER=none npm run react-start\" \"wait-on http://localhost:3000 && electron .\"",
    "build": "tsc ./public/electron/main.ts && npm run react-build && electron-builder",
    "release": "npm run react-build && electron-builder --publish=always",
    "lint": "eslint './src**/*.{ts,tsx}'"
  }
```

## 4. 실행파일 배포

- 다시한번 `package.json` 을 아래 내용을 추가하여 저장한 후, `npm run build` 실행
- build 명령어도 start 와 같이 tsc 로 타입스크립트를 빌드해야함 (`"build": "tsc ./public/electron/main.ts && npm run react-build && electron-builder",`)

```json
  "build": {
    "appId": "com.dorumu.electron-eel",
    "files": [
      "build/**/*",
      "node_modules/**/*"
    ],
    "directories": {
      "buildResources": "assets"
    },
    "extraMetadata": {
      "main": "build/electron/main.js"
    },
    "extends": null
  },
```

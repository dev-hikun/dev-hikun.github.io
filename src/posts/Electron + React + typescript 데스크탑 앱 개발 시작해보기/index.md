---
title: Electron + React + Typescript 데스크탑 앱 개발 시작해보기
date: '2021-01-14'
slug: '/posts/Electron + React + Typescript 데스크탑 앱 개발 시작해보기'
tags: ['React', 'Typescript', 'Electron']
category: '개발'
featuredImage: './images/electron-logo.png'
---
회사에서 윈도우프로그램과 웹 소켓으로 통신하는 데스크탑 프로그램을 만드는 프로젝트를 맡게 되었다.
(필자는 이 프로젝트를 시작함과 동시에 '오예 블로그에 쓸거 생겼다' 라는 생각에 들떴다는건 비밀)

이에 본인의 기록용 포스팅이라는 베이스를 두고 누군가 필요한 사람을 위해 강좌 형식으로 적도록 하겠다.
~~본디 기록용 포스팅 일 뿐이어서, 불친절한 시리즈인건 안비밀~~
# 0. 본 포스팅에 사용 된 버전
필자는 yarn이 아닌 npm을 주로 사용한다.

**사용된 버전**
node:  v12.20.0
npm, npx:  v6.14.8
react : 17.0.1
electron-is-dev: 1.2.0
electron: 11.2.0
electron-builder: 22.9.1
typescript: 4.1.3
wait-on: 5.2.1
cross-env: 7.0.3
concurrently: 5.3.0

# 1. React App 생성
```
npx create-react-app 앱이름 --template typescript
```
npm이 아닌 npx로 앱을 생성한다. npx를 사용하면 최신버전의 CRA로 React가 실행되는 환경을 만들 수 있다.
우리는 타입스크립트를 사용할 것이기 때문에 뒤에 뒤에 `--template typescript`는 필수.
> [참조: npm과 npx의 차이점](https://velog.io/@kimkyeseung/%EB%B2%88%EC%97%AD-%EA%B7%B8%EB%9E%98-npx-npm%EB%A7%90%EA%B3%A0-%EC%B0%A8%EC%9D%B4%EC%A0%90-%EC%84%A4%EB%AA%85)

# 2. Electron 설치
react 프로젝트가 성공적으로 생성 되었다면, 
해당 앱 폴더로 이동하여 Electron과 각종 개발에 편의성을 주는 도구들을 설치한다.

```shell
npm i electron-is-dev
npm i electron electron-builder concurrently cross-env wait-on typescript --save-dev
```
해당 모듈들은 (electron-is-dev 제외) 런타임에서 사용되지 않을 개발용 모듈이므로 _`--save-dev`_ 인수를 추가해준다.
- **`Electron-is-dev`**: 개발환경인지 빌드한 프로덕션환경인지 확인을 위하여 사용됨.
- **`Electron`** : 일렉트론을 실행하기 위해서 사용됨.
- **`Electron-builder`** : 일렉트론을 실제 프로덕션 버전으로 빌드하기 위해 사용됨.
- **`concurrently`** : 동시에 여러 명령어를 사용(병렬적으로)하기 위해 사용됨.
- **`cross-env`** : 프로그램을 CLI환경에서 실행 시킬 때에, OS에 관계 없이 환경변수를 설정할 수 있도록 하기 위해 사용됨.
- [**`wait-on`**](https://github.com/jeffbski/wait-on#readme) : HTTP 자원, port, file등이 활성화 될 때 까지 기다려주는 cross platform
- **`typescript`** : typescript

~~tsconfig는 각자 알아서 작성하시길....~~
# 3. Electron을 실행하는 코드작성
위에서 모든것이 완료되었다면, public 폴더 안에 Electron을 실행하는 ts파일을 하나 작성해준다.
```TYPESCRIPT
import { app, BrowserWindow } from 'electron';
import * as isDev from 'electron-is-dev';
import * as path from 'path';

let mainWindow: BrowserWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    center: true,
    kiosk: !isDev,
    resizable: true,
    fullscreen: false,
    fullscreenable: true,
    webPreferences: {
      // node환경처럼 사용하기
      nodeIntegration: true,
      enableRemoteModule: true,
      // 개발자도구
      devTools: isDev,
    },
  });

  // production에서는 패키지 내부 리소스에 접근.
  // 개발 중에는 개발 도구에서 호스팅하는 주소에서 로드.
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);

  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: 'detach' });
  }

  mainWindow.setResizable(true);

  // Emitted when the window is closed.
  mainWindow.on('closed', () => (mainWindow = undefined!));
  mainWindow.focus();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

```
# 4. package.json 파일 수정
프로젝트 파일 내의 `package.json` 파일을 다음과 같이 수정해준다.
```JSON
{
  ...
  "main": "public/electron.js",
  "homepage": "./",
  "scripts": {
    "react-start": "react-scripts start",
    "react-build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "start": "tsc ./public/electron.ts && concurrently \"cross-env BROWSER=none npm run react-start\" \"wait-on http://localhost:3000 && electron .\"",
    "build": "npm run react-build && electron-builder",
    "release": "npm run react-build && electron-builder --publish=always",
    "lint": "eslint './src**/*.{ts,tsx}'"
  },
  ...
}

```
**main** : 프로그램의 진입점이므로 꼭 설정해주어야함. 일렉트론을 실행하는 코드이다.
**scripts** : 
- **[start]** : electron.ts를 js파일로 변환해 준 후, concurrently를 통해 browser로 띄우지 않고 리액트를 실행시킨 후 http://localhost:3000이 로드가 완료되면 electron을 실행시킨다.
- **[build]** : `dist`폴더에 production 실행파일을 생성해준다.
- **[release]** : build명령어와 같지만 그 후 배포를 해준다. (추가설정 필요)

# 5. 실행
`npm run start`를 터미널에 입력해주면 다음과 같이 앱이 뜨고, 가운데 리액트 마크가 ~~삥글삥글~~ 돈다면 성공적으로 완료되었다.
![일렉트론이 실행된 이미지](https://images.velog.io/images/dev_hikun/post/20a15d05-391b-4cc8-b7e0-be3bce8e1ead/image.png)


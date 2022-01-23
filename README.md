# Detect Facebook in-app browser

[![Go To NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/detect-facebook-in-app-browser)
[![Go To yarnpkg](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)](https://yarnpkg.com/package/detect-facebook-in-app-browser)

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

[![codecov](https://codecov.io/gh/juunini/detect-facebook-in-app-browser/branch/main/graph/badge.svg?token=H2LNON80F9)](https://codecov.io/gh/juunini/detect-facebook-in-app-browser)

## Languages

[한국어](https://juunini.github.io/detect-facebook-in-app-browser/?path=/story/detect-facebook-in-app-browser-%ED%95%9C%EA%B5%AD%EC%96%B4--page) | [English](https://juunini.github.io/detect-facebook-in-app-browser/?path=/story/detect-facebook-in-app-browser-english--page)

---

## Introduce

Facebook in-app browsers experience a lot of inconvenience because they cannot be linked to existing browsers.
In particular, some functions such as WebRTC cannot be used, so the user can have a bad experience, so check in advance.
I created this library to encourage users to leave Facebook and turn on their browsers to enter.

## Install

```bash
npm i detect-facebook-in-app-browser # npm

yarn add detect-facebook-in-app-browser # yarn
```

## Usage

```ts
import isFacebookInAppBrowser from 'detect-facebook-in-app-browser';

if (isFacebookInAppBrowser()) {
  // do something...
}
```

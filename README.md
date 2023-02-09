# Mini Authenticator

[![front-end]][react] [![css-badge]][tailwindcss] ![ts-badge] ![prettier-badge] ![mit]

> minimal open source 2FA authenticator that never store your secret keys

📥 [Download] @ Chrome Web Store

<p><img src="https://i.imgur.com/62cgIKe.png" width="640" /></p>

[download]: https://bit.ly/3yDVq1N
[ts-badge]: https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue
[front-end]: https://img.shields.io/badge/front--end-React-blue
[css-badge]: https://img.shields.io/badge/css-tailwind-blue
[mit]: https://img.shields.io/github/license/hoishing/mini-authenicator
[prettier-badge]: https://img.shields.io/badge/formatter-prettier-yellow

## Features

- no special permission need: we don't read / write your web pages
- simple and single-purpose: just paste your key and we generate the [TOTP](https://en.wikipedia.org/wiki/Time-based_one-time_password) for [2FA](https://en.wikipedia.org/wiki/Multi-factor_authentication)
- secure: we do **NOT** store your keys in any places (cookies, chrome storage, cloud ... etc)
- offline: no sensitive data transmitted over the internet
- open source: everyone can check the source code integrity

## How to use

🎬 https://youtu.be/64P0G7dOpKY

1. click on the extension button
2. paste your secret key
3. get your 2FA passcode 🎉

## Motivation

I've used authenticators that are packed with features. They allow you to save your secret keys, sync them across different devices through the internet, also import/export the keys by QRCode. If you are looking for tools like that, I recommend [this one](https://authenticator.cc/), it's handy, open source and well documented 👍

However, password managers such as [bitwarden](https://bitwarden.com), Apple Keychain ... etc already did a very good job in storing and syncing keys across devices. I want to rely on them in secret key management, and let the authenticator extension do only one thing - generate TOTP for 2FA, nothing more.

This is where Mini Authenticator comes in. It designed with a "less is more" philosophy in mind. I cut all functionalities that already handled by password managers, and only perform the pure mathematical calculation of TOTP. So it doesn't require storage, read/write your web pages, internet access, special permissions... etc. And most importantly, it's open source, so everyone can inspect and help improving it in future.

I agree that this extension is not for everyone, but only those already using password mangers to manage their secret keys, also those who concern about chrome extension permissions and abilities.

## Technical Details

🔗 [source code](https://github.com/hoishing/mini-authenticator)

### How to build

```shell
git clone https://github.com/hoishing/mini-authenticator.git
cd mini-authenticator
npm install
npm run build
```

### Run dev server

- `npm run dev`
- open `http://localhost:5173/popup.html` in browser

### TOTP generation

I created a pure JS npm package to generate TOTP, please refer [toto-auth](https://github.com/hoishing/totp-auth) for the program logic and implementation details.

### Tech Stack

Though this is a simple chrome extension, a whole stack of modern web technologies have been employed to enhance the code quality and DX.

- [Vite](https://vitejs.dev): dev server w/ hot module reload
- [React]: xss protection, component creation and state management
- [CRXJS](https://crxjs.dev/vite-plugin): vite plugin that greatly enhance DX for creating chrome ext
- [tailwindcss]: utility-first CSS framework
- [daisyUI](https://daisyui.com): tailwind component library, color theme
- [Typescript](https://www.typescriptlang.org/): typed JS for better code quality

[react]: https://reactjs.org
[tailwindcss]: https://tailwindcss.com

## Questions?

Open a [github issue] or ping me on [Twitter ![twitter-icon]][Twitter]

[github issue]: https://github.com/hoishing/mini-authenticator/issues
[Twitter]: https://twitter.com/intent/tweet?text=https://github.com/hoishing/mini-authenticator/%20%0D@hoishing
[twitter-icon]: https://api.iconify.design/logos/twitter.svg?width=20

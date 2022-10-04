# Mini Authenticator

> minimal opensrouce 2FA authenticator that never store your secret keys

## Features

- no special permission need: we don't read / write your web pages
- simple, signle-purpose: just paste your key and we generate the [TOTP](https://en.wikipedia.org/wiki/Time-based_one-time_password) for [2FA](https://en.wikipedia.org/wiki/Multi-factor_authentication)
- secure: we do **NOT** store your keys in any places (cookies, chrome storage, cloud ... etc)
- offline: no sensitive data transmitted over the internet
- open source: everyone can check the source code integrity

## How to use

1. click on the extension button
2. paste your secret key
3. get your 2FA passcode and done 🎉

## Motivation

I've used authenticators that are packed with handy features. They allow you to save your secret keys, sync them across diffierent devices through the internet, also import/export the keys by QRCode. If you are looking for tools like that, I recommend [this one](https://authenticator.cc/), handy, opensource and well documemted 👍

However, password managers such as Bitwarden, Apple Keychain ... etc already did a very good job in storing and syncing keys across devices. I want to rely on them in secret key manangement, and let the authenticator extension do only one thing - generate TOTP for 2FA, nothing more.

This is where Mini Authenticator comes in. It designed with a "less is more" philosopy in mind. I cut all functionalities that already handled by password managers, and only perform the pure mathematical calculation of TOTP. So it doesn't require storage, read/write your web pages, internet access, special permissions... etc. And most importantly, its opensource, so everyone can inspect and help improving it in future.

I agree that this extension is not for everyone, but only those already using password mangers to manage their secret keys, also those who concern about chrome extension permissions and abilities.

## Technical Details

### TOTP generation

I created a pure JS npm package to generate TOTP, please refer [toto-auth](https://github.com/hoishing/totp-auth) for the program logic and implemenation details.

### tooling

Though this is a simple chrome extension, a whole stack of modern web techologies have been employed to enhance the code quality and DX.

- [vite](https://vitejs.dev): dev server w/ hot module reload
- [react](https://reactjs.org): xss protection, component creation and state management
- [crxjs](https://crxjs.dev/vite-plugin): vite plugin that greatly enhance DX for creating chrome ext
- [tailwindcss](https://tailwindcss.com): utility-first CSS framework
- [daisyUI](https://daisyui.com): tailwind component library, color theme
- [typscript](https://www.typescriptlang.org/): typed javascript for better code quality

## Need Help?

Open a [github issue](https://github.com/hoishing/mini-authenticator/issues) or ping me on [Twitter](https://twitter.com/hoishing)

# Ig News

## Summary
Simple ReactJS blog application, using NextJS framework.

## Layout
* [Figma](https://www.figma.com/file/KNZKHWlxtZj4RakMz17dui/ig.news-(Copy)?node-id=1%3A2)

## Dependencies
* Stripe (payment transactions api)
* FaunaDB (database serveless applications)
* Prismic CMS
* GitHub (OAuth)
* Next

## Next
* To create a new project, run `yarn create next-app <project-name>`
* Open the created directory and run `yarn add typescript @types/react @types/node -D`
* Rename the `_app.js` and `index.js` files to `_app.tsx` and `index.tsx`
* Update the `_app.tsx` code:
```
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
```
* Clean the `index.tsx` file:
```
export default function Home() {
  return (
    <>
      Hello World
    </>
  )
}
```

## Directory Structure
- src
	- pages //Can't be renamed
		- _app.tsx
		- index.tsx
- public

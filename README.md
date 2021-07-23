# Ig News

## Summary
Simple ReactJS blog application, using NextJS framework.

## Layout
* [Figma](https://www.figma.com/file/KNZKHWlxtZj4RakMz17dui/ig.news-(Copy)?node-id=1%3A2)

## Frameworks and integrations
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
* Create a `_document.tsx` file and create a class extending from `Document`:
```
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
```

## Package Dependencies
```
yarn add sass
yarn add react-icons
yarn add stripe
```

## Stripe
Sign in [Stripe](stripe.com), create a new product and copy the API secret key to `STRIPE_API_KEY` environment variable key.

## Directory Structure
- src
  - components
    - Header
    - SignInButton
    - SubscribeButton
	- pages //Can't be renamed
		- _app.tsx
    - _document.tsx // override the default next _document.tsx
    - home.module.scss
		- index.tsx
  - services
    - stripe.tsx
  - styles
    - global.scss
- public
- .env.local

## Documentation
* [Next Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
* [Stripe API reference](https://stripe.com/docs/api)
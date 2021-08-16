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
### Client Side Rendering (Api routes)
- 


### Server Side Rendering (SSR)
- GetServerSideProps

### Static Site Generation (SSG)
- GetStaticProps

## Login with Github
* Create a new [Github OAuth](github.com/settings/applications/new) application.
* Set the `Authorization callback URL` to `http://<my_host>/api/auth/callback`.
* Copy the `GITHUB_ID` and `GITHUB_SECRET` to `env.local`.
* Create a api auth route in `api/auth/[...next-auth].ts` and follow the [documentation example](https://next-auth.js.org/getting-started/example).

## Package Dependencies
```
yarn add sass
yarn add react-icons
yarn add stripe
yarn add next-auth
yarn add @types/next-auth -D
yarn add faunadb
yarn add axios
yarn add @stripe/stripe-js
```

## Stripe
* Sign in [Stripe](stripe.com).
* Create a new product and copy the API secret key to `STRIPE_API_KEY` environment variable key.
* Create the `stripe.tsx` file service:
```
import Stripe from 'stripe';
import { version } from '../../package.json';

export const stripe = new Stripe(
    process.env.STRIPE_API_KEY,
    {
        apiVersion: '<my_api_version>',
        appInfo: {
            name: '<my_api_name>',
            version
        }
    }
);
```
* Run the Stripe CLI:
```
stripe login
```
* Run the Stripe Listener:
```
stripe listen --forward-to localhost:3000/api/webhooks
```

## FaunaDB
* Sign in [FaunaDB](fauna.com).
* Create a database
* Create a api key and copy to `FAUNADB_KEY` environment variable key.
* Create a `users` collection
* Create a unique index:
  * index name: `user_by_email`.
  * terms: `data.email`.
* Create the `fauna.tsx` file service:
```
import { Client } from 'faunadb';

export const fauna = new Client({
    secret: process.env.FAUNADB_KEY
})
```

## Directory Structure
- src
  - components
    - Header
    - SignInButton
    - SubscribeButton
	- pages //Can't be renamed
		- api
      - auth
        - [...next-auth].ts
      - subscribe.ts
      - webhooks.ts
    - _app.tsx
    - _document.tsx // override the default next _document.tsx
    - home.module.scss
		- index.tsx
  - services
    - api.ts
    - stripe.tsx
    - fauna.tsx
  - styles
    - global.scss
- public
- .env.local

## Documentation
* [Next Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
* [Stripe API reference](https://stripe.com/docs/api)
* [Getting started with Next Auth](https://next-auth.js.org/getting-started/example)
* [Scopes for Github OAuth Apps](https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps)
* [How to resolve jwt_auto_generated_signing_key warning](https://github.com/nextauthjs/next-auth/issues/484)
* [Stripe CLI](https://stripe.com/docs/stripe-cli)
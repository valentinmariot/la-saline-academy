// App.tsx
import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import "../styles/global.scss";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  console.log("pageProps", pageProps);

  return (
    <SessionProvider session={session}>
      <Head>
        <meta charSet="utf-8" />
        <meta itemProp="title" content="La Saline Academy" />
        <meta itemProp="name" content="La Saline Academy" />
        <meta
          itemProp="description"
          content="Study with the world’s best musicians. Experience immersive video masterclasses wherever you are. New masterclasses added every month."
        />
        <meta itemProp="image" content="" />

        <meta
          name="description"
          content="Study with the world’s best musicians. Experience immersive video masterclasses wherever you are. New masterclasses added every month."
        />
        <meta name="theme-color" content="#1A1A1A" />
        <meta name="background_color" content="#1A1A1A" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="La Saline Academy" />
        <meta
          name="twitter:description"
          content="Study with the world’s best musicians. Experience immersive video masterclasses wherever you are. New masterclasses added every month."
        />
        <meta name="twitter:image" content="" />

        <meta property="og:site_name" content="La Saline Academy" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://la-saline-academy.vercel.app"
        />
        <meta property="og:title" content="La Saline Academy" />
        <meta
          property="og:description"
          content="Study with the world’s best musicians. Experience immersive video masterclasses wherever you are. New masterclasses added every month."
        />
        <meta property="og:image" content="" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#a763f8"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="La Saline Academy" />
        <meta name="application-name" content="La Saline Academy" />
        <meta name="msapplication-TileColor" content="#1a1a1a" />
        <meta
          name="msapplication-config"
          content="/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#1a1a1a" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

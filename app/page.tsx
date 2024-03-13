
import { Metadata } from "next";
import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";

export const metadata: Metadata = {
  title: "My training project page",
  description: "Start develop",
  authors: [{ name: "Likie" }],
};

export default function Home({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>The best Top</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

'use client';

import { useState } from "react";
import { Button, Htag, Paragraph, Rating } from "../components/index";
import Logo from '../public/vercel.svg';

// import { Metadata } from "next";
// import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import RootLayout from "./layout";

// export const metadata: Metadata = {
//   title: "My training project page",
//   description: "Start develop",
//   authors: [{ name: "Likie" }],
// };

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Head>
        <title>The best Top</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet" />
      </Head>
      <Htag tag='h1'>Text</Htag>
      {/* <Logo /> */}
      <Button appearance="primary" arrow="down">Button</Button>
      <Paragraph size="l">Big</Paragraph>
      <Paragraph>Medium</Paragraph>
      <Paragraph size="s">Small</Paragraph>
      <Rating rating={rating} isEditable setRating={setRating} />
      {/* <Component {...pageProps} /> */}
    </>
  );
}

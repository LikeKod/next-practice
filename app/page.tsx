
import { Button, Htag, Paragraph, Rating } from "../components/index";
// import { Metadata } from "next";
// import { AppProps } from "next/dist/shared/lib/router/router";
import axios from 'axios';
import { GetStaticProps, Metadata } from "next";
import { MenuItem } from "../interfaces/menu.interface";
import { getMenu } from "../api/menu";
import Menu from "../components/menu/menu";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Raiting project'
  };
}



// const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
//   firstCategory: 0
// });

export default async function Home(){
  const menu = await getMenu(0);
  return (
    <main >
      <Menu />
      {/* <Head>
        <title>The best Top</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet" />
      </Head>
      <Htag tag='h1'>Text</Htag> */}
      {/* <Logo /> */}
      {/* <Button appearance="primary" arrow="down">Button</Button>
      <Paragraph size="l">Big</Paragraph>
      <Paragraph>Medium</Paragraph>
      <Paragraph size="s">Small</Paragraph>
      <Rating rating={4} isEditable /> */}
      {/* <Component {...pageProps} /> */}
    </main>
  );
}

export const getInitialProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[];
  firstCategory: number;
}
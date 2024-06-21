
import { Button, Htag, Paragraph, Rating } from "../../components/index";
// import { Metadata } from "next";
// import { AppProps } from "next/dist/shared/lib/router/router";
import axios from 'axios';
import { GetStaticProps, Metadata } from "next";
import { MenuItem } from "../../interfaces/menu.interface";
import { getMenu } from "../../api/menu";
import Menu from "../../components/menu/menu";
import { API } from "../api";
import { getPage } from "../../api/page";

export async function generateMetadata({params}: {params: {alias: string}}): Promise<Metadata> {
  const page = await getPage(params.alias);
  return {
    title: page?.metaTitles
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
    </main>
  );
}

export const getInitialProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
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
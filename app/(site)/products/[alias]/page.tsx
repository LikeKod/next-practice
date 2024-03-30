import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPage } from "../../../../api/page";
import { getMenu } from "../../../../api/menu";

export const metadata: Metadata = {
    title: 'Page'
};

export async function generateStaticParams() {
    const menu = await getMenu(0);
     return menu.flatMap(item => item.pages.map(page => ({alias: page.alias})));
}

export default async function PageProduct({params}: {params:{alias: string}}) {
    const page = await getPage(params.alias);
    if(!page){
        notFound();
    }
    return (
        <div>
            Page with alias {params.alias}
        </div>
    );
}
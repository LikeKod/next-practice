import { Metadata } from "next";
import { getPage } from "../../../api/page";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
    title: 'Page'
};

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
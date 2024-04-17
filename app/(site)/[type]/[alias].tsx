import { GetStaticPaths } from "next";
import { MenuItem } from "../../../interfaces/menu.interface";

function Course({menu, page, products}: CourseProps): JSX.Element {
    return (
        <>
        {products && products.length}</>
    );
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias))
    };
};